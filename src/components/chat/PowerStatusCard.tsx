import { Zap, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface PowerStatusProps {
  area: string;
  status: 'stable' | 'unstable' | 'outage';
  stability: number; // 0 to 100
  estimatedRestoration?: string;
}

export function PowerStatusCard({ area, status, stability, estimatedRestoration }: PowerStatusProps) {
  const statusConfig = {
    stable: { color: "text-green-500", bg: "bg-green-50", label: "Stable", icon: CheckCircle2 },
    unstable: { color: "text-yellow-500", bg: "bg-yellow-50", label: "Fluctuating", icon: AlertTriangle },
    outage: { color: "text-red-500", bg: "bg-red-50", label: "Outage", icon: Zap },
  };

  const config = statusConfig[status];

  return (
    <Card className="w-full max-w-sm border-2 shadow-md overflow-hidden animate-in fade-in slide-in-from-bottom-2">
      <CardHeader className={`pb-2 ${config.bg} flex flex-row items-center justify-between`}>
        <div>
          <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Grid Status: {area}</p>
          <CardTitle className={`text-lg flex items-center gap-2 ${config.color}`}>
            <config.icon className="w-5 h-5" />
            {config.label}
          </CardTitle>
        </div>
        <Badge variant={status === 'stable' ? 'default' : 'destructive'}>Live</Badge>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-medium">
            <span>Stability Index</span>
            <span>{stability}%</span>
          </div>
          <Progress value={stability} className="h-2" />
        </div>
        
        {status === 'outage' && (
          <div className="p-2 rounded bg-slate-100 border border-slate-200 text-center">
            <p className="text-[10px] text-muted-foreground uppercase">Estimated Restoration</p>
            <p className="text-sm font-bold text-slate-800">{estimatedRestoration || "Calculating..."}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
