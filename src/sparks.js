let styleSheet = null;

const SPARK_ELEMENT_WIDTH = 30;
const DISTANCE = 40;
const RANDOMNESS_ON = true;

function createTransformSteps() {
  const inputSteps = Array.from(arguments);
  const outputSteps = [inputSteps.shift()];
  inputSteps.forEach((step, i) => {
    outputSteps.push(`${outputSteps[i]} ${step}`);
  });
  return outputSteps;
}

const dynamicAnimation = (name, rotation) => {
  if (!styleSheet) {
    styleSheet = document.createElement('style');
    document.head.appendChild(styleSheet);
  }

  const randomDist = RANDOMNESS_ON
    ? Math.floor((Math.random() - 0.5) * DISTANCE * 0.7)
    : 0;

  const [s1, s2, s3] = createTransformSteps(
    `translate(-50%, -50%) rotate(${rotation}deg) translate(10px, 0px)`,
    `translate(${DISTANCE + randomDist}px, 0px) scale(0.5, 0.5)`,
    `translate(${SPARK_ELEMENT_WIDTH / 2}px, 0) scale(0, 0)`
  );

  styleSheet.sheet.insertRule(
    `@keyframes ${name} {
      0% {
        transform: ${s1};
      }
      70% {
        transform: ${s2};
      }
      100% {
        transform: ${s3};
      }
    }`,
    styleSheet.length
  );
};

const makeSpark = (center, rotation) => {
  const div = document.createElement('div');
  const aniName = `disappear_${rotation}`;
  dynamicAnimation(aniName, rotation);

  div.classList.add('spark');
  div.style.left = `${center.x}px`;
  div.style.top = `${center.y}px`;
  div.style.animation = `${aniName} 500ms ease-out both`;
  document.body.append(div);
  setTimeout(() => {
    document.body.removeChild(div);
  }, 1000);
};

export default function makeBurst(center) {
  for (let i = 0; i < 8; i++) {
    const randomSpace = RANDOMNESS_ON ? Math.floor(-17 + Math.random() * 34) : 0;
    makeSpark(center, 45 * i + randomSpace);
  }
}