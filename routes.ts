import { Router } from "https://deno.land/x/oak/mod.ts";
import { Controllers } from "./controllers.ts";

const router = new Router();

router.get("/api/v1/activities", Controllers.allActivies);
router.get("/api/v1/activities/:id", Controllers.oneActivity);
router.delete("/api/v1/activities/:id", Controllers.deleteActivity);
router.post("/api/v1/activities", Controllers.createActivity);
router.put("/api/v1/activities/:id", Controllers.updateActivity);

export default router;
