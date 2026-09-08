import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "DriDoces",
    description:
      "An artisan sweets storefront showcasing cakes and custom creations with direct ordering through WhatsApp.",
    url: "https://dridoces.vercel.app/",
    imageUrl: "/projects/dridoces.png",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Digital Storefront
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Next.js
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          WhatsApp
        </span>
      </div>
    ),
  },
  {
    name: "Compliance Eagle",
    description:
      "Monitor supplier compliance by CNPJ, category, and status from a focused operational dashboard.",
    url: "https://eagle.smarzaro.com/",
    imageUrl: "/projects/compliance-eagle.png",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Compliance
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          CNPJ
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Supplier Monitoring
        </span>
      </div>
    ),
  },
  {
    name: "Subnet Studio",
    description:
      "Plan IPv4 address space visually by splitting CIDR blocks into a clear subnet allocation tree.",
    url: "https://subnetstudio.smarzaro.com/",
    imageUrl: "/projects/subnet-studio.png",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          IPv4
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          CIDR
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Network Planning
        </span>
      </div>
    ),
  },
  {
    name: "HemoTwin",
    description:
      "Applied Computer Vision + Digital Twins + Git\n This project was created improve the blood donation system by calculating the waiting time in real-time and sharing the estimated time, so people would be encouraged to donate more blood",
    url: "https://youtu.be/GGNz7ynyP-g",
    imageUrl: "/projects/hemotwin.png",
    githubUrl: "https://github.com/All-in4good/camera",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Computer Vision (AI)
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          YOLO
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Real-time communication
        </span>
      </div>
    ),
  },
  {
    name: "Book Recommender",
    description: "Applied RAG, Vector Databases and Deployment with Docker",
    url: "https://books.smarzaro.com",
    imageUrl: "/projects/book-recommender.png",
    githubUrl: "http://github.com/braiansmarzaro/book-recommender/",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          RAG
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Langchain
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Vector Databases
        </span>
      </div>
    ),
  },
  {
    name: "CNN-Big-Bang-Theory-Classifier",
    description:
      "This project applied Importing, Labelling Data, Data Visualization, Data Normalization, Data Augmentation, Keras Model, Keras Early Stop CallBack, Model Saving and Prediction.",
    url: "https://github.com/braiansmarzaro/CNN-Big-Bang-Theory-Classifier",
    imageUrl: "/projects/cnn_project.png",
    githubUrl:
      "https://github.com/braiansmarzaro/CNN-Big-Bang-Theory-Classifier",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Python
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          Tensorflow
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 ring-1 ring-zinc-600 dark:bg-inherit dark:text-zinc-200 dark:ring-zinc-500">
          CNN
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="dark:zinc-500 flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-600 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="whitespace-pre-line p-4">{description}</p>
      </div>
      <Image src={imageUrl} width={1200} height={630} alt="" />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Visit website
        </a>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
          >
            <GitBranch strokeWidth={1.4} className="size-5" /> View code
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}
