import React, { useState, useEffect, useRef } from 'react';
import { Send, Zap, MapPin, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from 'react-router-dom';
import { ModeToggle } from "@/components/ModeToggle";
import { processUserMessage } from '../lib/powerLogic';

interface Message {
    id: number;
    type: 'user' | 'ai';
    isUser?: boolean;
    text: string;
    time: string;
}

const suggestions = [
    "Report an Outage",
    "Check Restoration Time",
    "View Traffic Delays"
];

const ChatAssistant = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [step, setStep] = useState(0);

    // We need a ref for the bottom of the list to scroll into view
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (overrideInput?: string) => {
        const messageText = (overrideInput || input).trim();
        if (!messageText) return;

        // 1. Add User Message to UI
        const userMsg: Message = {
            id: Date.now(),
            type: 'user',
            isUser: true,
            text: messageText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const lowerInput = messageText.toLowerCase().trim();
            let aiText = "";

            // 2. Integration: The Greeting Logic
            const greetings = ["hello", "hi", "hey", "good morning", "good afternoon"];

            if (greetings.includes(lowerInput)) {
                aiText = "Hello! Welcome to PowerPath Support. How can I assist you with your energy updates today?";
            }
            // 3. Integration: Location Logic (Yaba/Ikeja)
            else if (lowerInput.includes("yaba") || lowerInput.includes("ikeja")) {
                setStep(1); // Set state to "waiting for street"
                aiText = `I see you're asking about ${lowerInput.includes("yaba") ? "Yaba" : "Ikeja"}. Which specific street or area should I check?`;
            }
            // 4. Fallback to your existing logic
            else {
                const response = processUserMessage(messageText);
                aiText = response || "I'm checking the data now...";

                // Your existing step-based logic
                if (messageText.includes("light be restored")) {
                    setStep(1);
                    aiText = "What is your specific area?";
                } else if (step === 1) {
                    setStep(0);
                    aiText = `Checking NEPA database for ${messageText}... restoration at 6 PM.`;
                }
            }

            const aiResponse: Message = {
                id: Date.now() + 1,
                type: 'ai',
                text: aiText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        // 1. Fixed height container that doesn't scroll
        <div className="flex flex-col h-[100dvh] bg-background overflow-hidden transition-colors duration-300">

            {/* --- 2. LOCKED HEADER (No sticky/absolute) --- */}
            <header className="shrink-0 border-b border-border bg-card/80 backdrop-blur-md z-50">
                <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link to="/">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
                            </div>
                            <div>
                                <h2 className="font-bold text-sm leading-tight">PowerPath AI</h2>
                                <p className="text-[10px] text-muted-foreground flex items-center gap-1 font-medium">
                                    <ShieldCheck className="w-3 h-3 text-green-500" /> Active Assistant
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Toggle is now inside the locked header container */}
                    <ModeToggle />
                </div>
            </header>

            {/* --- 3. INDEPENDENT SCROLL AREA --- */}
            <ScrollArea className="flex-1 w-full overflow-y-auto">
                <div className="max-w-4xl mx-auto p-6 flex flex-col gap-6">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}
                        >
                            <div className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${msg.type === 'user'
                                ? 'bg-[#A3E635] text-black rounded-tr-none font-medium'
                                : 'bg-card text-card-foreground rounded-tl-none border border-border'
                                }`}>
                                <p className="text-sm leading-relaxed">{msg.text}</p>
                                <span className="text-[10px] block mt-1 opacity-50 font-medium">
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    ))}
                    {/* This invisible div allows the auto-scroll logic to work */}

                    {!isTyping && messages.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {suggestions.map((text) => (
                                <button
                                    key={text}
                                    onClick={() => handleSend(text)}
                                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-foreground hover:bg-primary/20 hover:border-primary/40 transition-all active:scale-95"
                                >
                                    {text}
                                </button>
                            ))}
                        </div>
                    )}

                    {isTyping && (
                        <div className="flex justify-start animate-in fade-in slide-in-from-left-2">
                            <div className="bg-[#1A1F26] dark:bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                                <span className="w-1.5 h-1.5 bg-[#A3E635] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-[#A3E635] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-[#A3E635] rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </ScrollArea>

            {/* --- 4. LOCKED FOOTER (No fixed) --- */}
            <footer className="shrink-0 border-t border-border bg-card p-4 pb-8 md:pb-4">
                <div className="max-w-4xl mx-auto space-y-4">
                    {/* Quick Chips */}
                    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                        {["When will light be restored?", "Check my route traffic"].map((chip) => (
                            <button
                                key={chip}
                                onClick={() => handleSend(chip)}
                                className="whitespace-nowrap px-4 py-1.5 rounded-full border border-white/10 
                       bg-white/5 
                       text-foreground dark:text-white 
                       dark:bg-slate-800 
                       text-[11px] font-semibold hover:bg-primary/20 transition-all"
                            >
                                {chip}
                            </button>
                        ))}
                    </div>

                    {/* Input Bar */}
                    <div className="flex items-center gap-2 bg-muted p-2 rounded-2xl border border-border group focus-within:ring-1 ring-primary/30 transition-all">
                        <Button variant="ghost" size="icon" className="rounded-full shrink-0 text-muted-foreground">
                            <MapPin className="w-5 h-5" />
                        </Button>
                        <input
                            placeholder="Ask about your area..."
                            className="flex-1 bg-transparent border-none outline-none text-sm px-2 text-foreground placeholder:text-muted-foreground"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && input.trim() && handleSend()}
                        />
                        <Button
                            className="rounded-xl w-10 h-10 p-0 shrink-0 bg-[#A3E635] hover:bg-[#94d130] text-black shadow-lg shadow-[#A3E635]/20 active:scale-95 transition-all"
                            onClick={() => handleSend()}
                            disabled={!input.trim()}>
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default ChatAssistant;
