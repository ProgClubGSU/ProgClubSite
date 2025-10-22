interface Step {
  title: string;
  description: string;
}

interface StepListProps {
  steps: Step[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <div className="my-6 space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4">
          {/* Step number */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            {index + 1}
          </div>

          {/* Step content */}
          <div className="flex-1 pt-1">
            <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
