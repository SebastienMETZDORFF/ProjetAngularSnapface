import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: "Archibald",
          description: "Mon meilleur ami depuis tout petit !",
          imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
          createdDate: new Date(),
          snaps: 150,
          location: "Paris"
        },
        {
          id: 2,
          title: "Tourisme : la montagne prend du galon en été | Les Echos",
          description: "De juin à septembre, la fréquentation touristique devrait connaître une nouvelle hausse dans les stations de montagne, actant la montée en puissance estivale de cette destination.",
          imageUrl: "https://media.lesechos.com/api/v1/images/view/64eed0632d71452de728dfdc/1280x720/0901717379190-web-tete.jpg",
          createdDate: new Date(),
          snaps: 215,
          location: "la montagne"
        },
        {
          id: 3,
          title: "Ballon de football — Wikipédia",
          description: "Un ballon de football.",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg",
          createdDate: new Date(),
          snaps: 103
        }
      ];

      getAllFaceSnaps() : FaceSnap[] {
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error("FaceSnap not found !");
        } else {
            return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: "snap" | "unsnap"): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
      }
}
