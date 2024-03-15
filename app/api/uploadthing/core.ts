import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  serverImage: f({
    image: { maxFileSize: "16MB", maxFileCount: 1 },
  }).onUploadComplete(() => {}),
  messageFile: f(["image"]).onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
