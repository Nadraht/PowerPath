from fastapi import FastAPI, Depends, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
import models, database

app = FastAPI(title="PowerPath AI Backend")

# --- 1. CORS SETUP (Crucial for your Frontend) ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with your frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- 2. DATABASE INITIALIZATION ---
# This tells FastAPI to create the tables in Supabase immediately
models.Base.metadata.create_all(bind=database.engine)

# --- 3. THE AI/LOGIC HELPERS ---
def calculate_status(zone_id: int, db: Session):
    """If 5+ reports in 10 mins, mark zone as OFF."""
    ten_mins_ago = datetime.utcnow() - timedelta(minutes=10)
    report_count = db.query(models.Report).filter(
        models.Report.zone_id == zone_id,
        models.Report.timestamp >= ten_mins_ago
    ).count()
    
    if report_count >= 5:
        zone = db.query(models.Zone).filter(models.Zone.id == zone_id).first()
        if zone and zone.status == "ON":
            zone.status = "OFF"
            zone.last_updated = datetime.utcnow()
            db.commit()

# --- 4. API ENDPOINTS ---

@app.get("/")
def home():
    return {"message": "PowerPath AI API is Live"}

@app.get("/status/{zone_name}")
def get_zone_status(zone_name: str, db: Session = Depends(database.get_db)):
    zone = db.query(models.Zone).filter(models.Zone.name.ilike(zone_name)).first()
    if not zone:
        raise HTTPException(status_code=404, detail="Zone not found")
    
    # Simple Heuristic Prediction
    prediction = "Stable" if zone.status == "ON" else "Restoration expected in 2-3 hours"
    
    return {
        "name": zone.name,
        "status": zone.status,
        "prediction": prediction,
        "last_updated": zone.last_updated
    }

@app.post("/report/{zone_id}")
async def report_power_issue(zone_id: int, background_tasks: BackgroundTasks, db: Session = Depends(database.get_db)):
    new_report = models.Report(zone_id=zone_id)
    db.add(new_report)
    db.commit()
    
    # Run the status check in the background
    background_tasks.add_task(calculate_status, zone_id, db)
    
    return {"message": "Report logged. PowerPath is analyzing your area."}
