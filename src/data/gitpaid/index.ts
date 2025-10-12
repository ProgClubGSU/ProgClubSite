/**
 * gitPAID Data Export
 *
 * This file exports all gitPAID resources for easy importing.
 * Import resources like this:
 *
 * import { gettingInterviewGuides, additionalResources } from '@/data/gitpaid';
 */

export { gettingInterviewGuides, passingInterviewGuides } from './guides';
export { additionalResources } from './additional-resources';
export type { Guide } from './guides';
export type { Resource, ResourceCategory } from './additional-resources';
