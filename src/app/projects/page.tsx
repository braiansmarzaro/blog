import { GitBranch, Globe, Newspaper, Play, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface ProjectAction {
  label: string;
  url: string;
  icon: LucideIcon;
}

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  actions: ProjectAction[];
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "DriDoces",
    description:
      "An artisan sweets storefront showcasing cakes and custom creations with direct ordering through WhatsApp.",
    imageUrl: "/projects/dridoces.png",
    actions: [
      {
        label: "Visit website",
        url: "https://dridoces.vercel.app/",
        icon: Globe,
      },
    ],
    technologies: (
      <div className="flex flex-wrap items-center gap-2">
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
    imageUrl: "/projects/compliance-eagle.png",
    actions: [
      {
        label: "Visit website",
        url: "https://eagle.smarzaro.com/",
        icon: Globe,
      },
    ],
    technologies: (
      <div className="flex flex-wrap items-center gap-2">
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
    imageUrl: "/projects/subnet-studio.png",
    actions: [
      {
        label: "Visit website",
        url: "https://subnetstudio.smarzaro.com/",
        icon: Globe,
      },
    ],
    technologies: (
      <div className="flex flex-wrap items-center gap-2">
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
    imageUrl: "/projects/hemotwin.png",
    actions: [
      {
        label: "Visit news",
        url: "https://www.bentley.com/en/news/ai-powered-blood-donation-room-monitoring-project-wins-the-2023-enactus-brazil-and-bentley-systems-itwin4good-challenge/",
        icon: Newspaper,
      },
      {
        label: "Watch pitch",
        url: "https://youtu.be/GGNz7ynyP-g",
        icon: Play,
      },
    ],
    technologies: (
      <div className="flex flex-wrap items-center gap-2">
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
    imageUrl: "/projects/book-recommender.png",
    actions: [
      {
        label: "Visit website",
        url: "https://books.smarzaro.com",
        icon: Globe,
      },
      {
        label: "View code",
        url: "http://github.com/braiansmarzaro/book-recommender/",
        icon: GitBranch,
      },
    ],
    technologies: (
      <div className="flex flex-wrap items-center gap-2">
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
    imageUrl: "/projects/cnn_project.png",
    actions: [
      {
        label: "View code",
        url: "https://github.com/braiansmarzaro/CNN-Big-Bang-Theory-Classifier",
        icon: GitBranch,
      },
    ],
    technologies: (
      <div className="flex flex-wrap items-center gap-2">
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
  actions,
  technologies,
}: Project) {
  return (
    <div className="flex h-full flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-600 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex flex-col items-start gap-4 p-4">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div className="grow">
        <p className="whitespace-pre-line p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={1200}
        height={630}
        sizes="(min-width: 1024px) 405px, (min-width: 768px) calc(50vw - 2.5rem), calc(100vw - 3rem)"
        loading="eager"
        className="aspect-[40/21] w-full object-cover object-top"
        alt=""
      />
      <div className="grid w-full grid-flow-col auto-cols-fr divide-x divide-zinc-400 dark:divide-zinc-500">
        {actions.map(({ label, url, icon: Icon }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 min-w-0 items-center justify-center gap-2 px-3 py-3 text-center text-sm transition-colors sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
          >
            <Icon strokeWidth={1.4} className="size-4 shrink-0" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="relative left-1/2 w-[calc(100vw-3rem)] max-w-7xl -translate-x-1/2">
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
