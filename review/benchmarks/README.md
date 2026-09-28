# Strength benchmark provenance

Downloaded 28 September 2026 from the documented public FitnessVolt standards API. Source: https://fitnessvolt.com/strength-standards/strength-data/ . License: **CC BY 4.0**, https://creativecommons.org/licenses/by/4.0/ . Attribution is visible on the Strength screen. The original responses, including provider metadata and attribution, are retained in `sources/benchmarks/`.

`fitnessvolt-2026-09-28.json` extracts only the `gym` population (self-reported Symmetric Strength records) for barbell bench press, incline barbell bench press and deadlift, with male/female tables. The API’s OpenPowerlifting competition block is deliberately not used. Per-response URLs and SHA-256 digests are included. This is a cached snapshot, not a live API integration; no personal measurements or workout records are transmitted to the data provider.

Local adaptations in `strength.mjs`:

- Use the containing bodyweight class and retain its sample size. No interpolation across weight classes, synthetic exact-bodyweight adjustment or age adjustment.
- Use tier boundaries at p20, p50, p80 and p95; interpolate p20 and p80 between neighboring published percentiles. Below p20 is the app’s Beginner band. The gym API begins at p10, so there is no invented p5 boundary or exact percentile for below-range values.
- Epley estimated 1RM from completed working sets with 2–10 reps; one rep retains its actual load. These estimates can differ from actual maxima, and the log does not establish proximity to failure, technique or range of motion. Relevant original research: https://pubmed.ncbi.nlm.nih.gov/7500624/ and https://pubmed.ncbi.nlm.nih.gov/33541232/ . These papers do not validate our complete app ranking system.
- Recent evidence window: 90 days. Comparison weight window: 30 days. These are transparent app freshness choices, not scientific rules. No missing bodyweight, comparison sex, unsupported variant or current performance is inferred.
- The headline badge identifies a specific lift. It is not a whole-body strength score, a medical assessment, a universal training-experience classification, a general-population percentile, or Lyfta’s proprietary rating. Statistical selection and self-report biases remain.

Milestone weights are reference thresholds, not training prescriptions. They do not change saved workouts, equipment increments or automatic progression. PR badges continue to use their existing comparable-history rules; the rejected XP system has been removed.
