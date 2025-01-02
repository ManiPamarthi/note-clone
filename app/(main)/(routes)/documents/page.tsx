"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {toast} from "sonner";

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({title: "Untitled"});

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note."
        });
    }
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
       <Image
        src="/panda-light.png"
        height="300"
        width="300"
        alt="sidebar panda"
        className="dark:hidden"
       />
       <Image
        src="/panda-dark.png"
        height="300"
        width="300"
        alt="sidebar panda"
        className="hidden dark:block"
       />
       <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Jotion
       </h2>
       <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a Note
       </Button>
    </div>
  )
}

export default DocumentsPage;