import { Blocks, CodeXml, Network } from "lucide-react";
import { ArrowBtn } from "../ui/Button";

const web3Features = [
  {
    title: "Blockchain Training",
    description:
      "Organize blockchain lessons, educational resources, and discussions for beginners and experienced developers.",
    icon: Blocks,
  },
  {
    title: "DAO Member Onboarding",
    description:
      "Guide new members through community processes, governance, and active projects in one organized workspace.",
    icon: Network,
  },
  {
    title: "Smart Contract Study Groups",
    description:
      "Discuss Solidity, review ideas, share learning materials, and collaborate on practical projects.",
    icon: CodeXml,
  },
];

const learningJourney = [
  "Blockchain Fundamentals",
  "Smart Contract Learning",
  "Practical Projects",
  "Community Collaboration",
];

export const Web3LearningSection = () => {
  return (
    <section
      aria-labelledby="web3-learning-heading"
      className="relative isolate overflow-hidden bg-blue-50/30 px-4 py-12 sm:px-8 sm:py-16 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary-100/50 blur-3xl"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center">
        <div className="flex max-w-3xl flex-col items-center gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">
            Web3 learning communities
          </p>
          <h2
            id="web3-learning-heading"
            className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl md:text-4xl"
          >
            Build and Learn Together with Your{" "}
            <span className="text-primary-500">Web3 Community</span>
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base lg:text-lg">
            From blockchain bootcamps to DAO onboarding, Zedu gives Web3
            communities a collaborative space to share knowledge, organize
            discussions, and learn together.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {web3Features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex h-full flex-col items-start gap-4 rounded-2xl border border-primary-100 bg-white p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 sm:rounded-3xl"
            >
              <span className="rounded-xl bg-primary-50 p-3 text-primary-500">
                <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="w-full rounded-2xl bg-neutral-900 px-4 py-6 text-white sm:px-8 sm:py-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary-200">
            Your Web3 learning journey
          </p>
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {learningJourney.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-left"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="text-sm font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <ArrowBtn
          text="Start Your Web3 Learning Community"
          loggedInText="Go to Dashboard"
          linkToHome
          className="justify-center"
        />
      </div>
    </section>
  );
};
