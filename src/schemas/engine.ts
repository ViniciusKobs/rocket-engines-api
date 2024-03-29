import { Schema } from 'mongoose';
import { IEngine } from '../interfaces/engine';

const SEngine = new Schema<IEngine>({
  config: { type: String, required: true },
  engineType: { type: String, required: true },
  seriesName: { type: String, required: true },
  seriesDescription: { type: String, required: true },
  manufacturer: { type: String, required: true },
  sourceUrl: { type: String, required: true },
  imageUrl: { type: String, required: true },
  tags: [{ type: String, required: true }],
  seriesSpecLevel: { type: String, required: true },
  groundOnly: { type: String, required: true },
  gimbalRange: { type: String, required: true },
  origMass: { type: String, required: true },
  cost: { type: String, required: true },
  entryCost: { type: String, required: true },
  category: { type: String, required: true },
  year: { type: String, required: true },
  technology: { type: String, required: true },
  era: { type: String, required: true },
  orphan: { type: String, required: true },
  upgrade: { type: String, required: true },
  spacecraft: { type: String, required: true },
  massMult: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  specLevel: { type: String, required: true },
  maxThrust: { type: String, required: true },
  minThrust: { type: String, required: true },
  ullage: { type: String, required: true },
  pressureFed: { type: String, required: true },
  ignitions: { type: String, required: true },
  propellant: [{ name: { type: String, required: true }, ratio: { type: Number, required: true } }],
  ispVac: { type: String, required: true },
  ispAsl: { type: String, required: true },
  ratedBurnTime: { type: String, required: true },
  testedBurnTime: { type: String, required: true },
  safeOverburn: { type: String, required: true },
  ignitionReliabilityStart: { type: String, required: true },
  ignitionReliabilityEnd: { type: String, required: true },
  cycleReliabilityStart: { type: String, required: true },
  cycleReliabilityEnd: { type: String, required: true },
});

export default SEngine;