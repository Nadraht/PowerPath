export const LAGOS_DATA = {
    areas: {
        "ikeja": {
            streets: ["allen avenue", "opebi", "obafemi awolowo way"],
            status: "Outage",
            reason: "Transformer Fault at Allen Junction",
            restoration: "4:00 PM Today"
        },
        "surulere": {
            streets: ["aguda", "adeniran ogunsanya", "itire"],
            status: "Operational",
            reason: "N/A",
            restoration: "N/A"
        },
        "lekki": {
            streets: ["phase 1", "admiralty way", "agate street"],
            status: "Outage",
            reason: "Emergency Grid Maintenance",
            restoration: "Pending"
        }
    },
    traffic: {
        "third mainland bridge": "Heavy (+45 min delay, accident near Oworonshoki)",
        "eko bridge": "Moderate (+15 min delay)",
        "lekki-epe expressway": "Heavy (+50 min delay, construction)"
    }
};

export const processUserMessage = (message: string) => {
    const msg = message.toLowerCase();

    // Rule 1: Route Specificity (Oworonshoki to Yaba)
    if (msg.includes("oworonshoki") && msg.includes("yaba")) {
        return `Route Alert: The trip from Oworonshoki to Yaba is currently affected by a 45-minute delay on the Third Mainland Bridge due to an accident. Expect significant delays for repair crews.`;
    }

    // Rule 2: Smart Location Validation (Area but no street)
    const matchedArea = Object.keys(LAGOS_DATA.areas).find(area => msg.includes(area));
    if (matchedArea) {
        const hasStreet = LAGOS_DATA.areas[matchedArea as keyof typeof LAGOS_DATA.areas].streets.some(s => msg.includes(s));

        if (!hasStreet) {
            return `I see you are reporting from ${matchedArea.toUpperCase()}. To give you an exact restoration time, please provide your specific **Street Name**.`;
        }

        const data = LAGOS_DATA.areas[matchedArea as keyof typeof LAGOS_DATA.areas];
        return `Status for ${matchedArea.toUpperCase()}: ${data.status}. Reason: ${data.reason}. Estimated Restoration: ${data.restoration}.`;
    }

    return "I've received your report. Would you like to view the live outage map for Lagos?";
};
