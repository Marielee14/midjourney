import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const getRandomPrompt = surpriseMePrompts[randomIndex];

  if (getRandomPrompt === prompt) return getRandomPrompt(prompt);
  return getRandomPrompt;
}
