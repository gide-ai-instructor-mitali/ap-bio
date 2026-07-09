// AP Biology Diagnostic — Question Bank (40 Questions, All 8 Units)
// Rewritten to AP-exam/USABO/NABT item-writing standard: stimulus-based stems,
// best-answer parity across options, misconception-driven distractors.
const AP_BIO_QUESTIONS = [
  {
    "id": 1,
    "category": "Unit 1: Chemistry of Life — Topic 1.4: Properties of Water",
    "skills": "SP 2.A: Describe, using a visual representation, data or a model",
    "difficulty": "1 — Foundational",
    "stem": "The graph shows the temperature change of two 100 g liquid samples (water and ethanol) as each absorbs the same amount of heat energy. Which explanation best accounts for the smaller temperature rise in water?",
    "visual": "<svg viewBox='0 0 420 260' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect x='0' y='0' width='420' height='260' fill='white'/><line x1='55' y1='20' x2='55' y2='220' stroke='#222' stroke-width='1.5'/><line x1='55' y1='220' x2='400' y2='220' stroke='#222' stroke-width='1.5'/><text x='10' y='120' font-size='12' transform='rotate(-90 10,120)'>Temperature (°C)</text><text x='190' y='245' font-size='12'>Heat added (cal)</text><polyline points='55,210 120,175 190,140 260,105 330,70 390,40' fill='none' stroke='#c0392b' stroke-width='2.5'/><polyline points='55,210 120,200 190,190 260,180 330,170 390,160' fill='none' stroke='#2980b9' stroke-width='2.5'/><text x='330' y='35' font-size='11' fill='#c0392b'>ethanol</text><text x='330' y='155' font-size='11' fill='#2980b9'>water</text><text x='55' y='232' font-size='10'>0</text></svg>",
    "options": {
      "A": "Water molecules are smaller than ethanol molecules, so a given mass contains more particles, spreading the same heat energy over more particles and lowering the temperature change per particle",
      "B": "Water's extensive hydrogen-bond network requires much of the added heat energy to break intermolecular hydrogen bonds before the remaining energy can increase average molecular kinetic energy (temperature), giving water a higher specific heat capacity than ethanol, which has weaker intermolecular forces",
      "C": "Water absorbs infrared radiation into its covalent O-H bonds as stored chemical potential energy, converting most of the added heat into a form that does not register as a temperature increase",
      "D": "Water always has a lower temperature than organic solvents at equivalent heat input because polar molecules are inherently unable to store thermal energy as kinetic energy"
    },
    "correct": "B",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nEach water molecule can form up to four hydrogen bonds with neighbors. Raising water's temperature requires both increasing average kinetic energy AND breaking a substantial fraction of these H-bonds, so more heat is absorbed per degree of temperature rise than in ethanol, whose intermolecular forces are weaker (fewer H-bond donors/acceptors per molecule). This gives water an unusually high specific heat capacity (~4.18 J/g·°C), visible in the graph as the shallower slope for water.\n\nBiological significance: buffers cells and aquatic habitats against rapid temperature swings that would otherwise denature enzymes.\n\nDistractors:\nA — Molecular size/particle count is true but irrelevant; specific heat differences arise from intermolecular force strength, not particle number (both samples are 100 g regardless of molecule size).\nC — Water does not store added heat as covalent-bond chemical potential energy; the graph shows a genuine temperature change, not energy being 'hidden.'\nD — Overgeneralizes with 'always... inherently unable'; polarity does not universally prevent kinetic energy storage — many polar solvents have moderate specific heats.\n\nDiagnostic focus: Connect molecular H-bonding capacity directly to the macroscopic slope difference shown in the graph.",
    "unit": "Unit 1",
    "big_idea": "SYI",
    "sp": "SP 2.A"
  },
  {
    "id": 2,
    "category": "Unit 1: Chemistry of Life — Topic 1.6: Structure and Function of Biological Macromolecules — Proteins",
    "skills": "SP 1.B: Explain a concept, process, model, or mechanism",
    "difficulty": "2 — Application",
    "stem": "A point mutation replaces a hydrophobic amino acid buried in the core of a globular enzyme with a charged, hydrophilic amino acid. The active-site residues themselves are unchanged. Which level of protein structure is most directly disrupted, and what is the most likely functional consequence?",
    "options": {
      "A": "Primary structure is disrupted because the sequence changes; since primary structure alone specifies function, the enzyme will refold immediately into an equally active conformation",
      "B": "Quaternary structure is disrupted because any interior substitution alters how polypeptide subunits assemble, regardless of the mutated residue's location within the subunit",
      "C": "Tertiary structure is most directly disrupted: introducing a charged residue into the hydrophobic core destabilizes the hydrophobic packing that drives correct folding, which can cause misfolding or reduced stability and impair catalytic function even though the active-site residues are unchanged",
      "D": "Secondary structure is disrupted because interior hydrophobic residues are required to form alpha helices; replacing them with hydrophilic residues prevents helix formation throughout the protein"
    },
    "correct": "C",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nTertiary structure — the overall 3-D shape of a single polypeptide — is stabilized substantially by the hydrophobic effect, which clusters nonpolar side chains away from water in the protein interior. Placing a charged residue in that interior disrupts this packing, potentially exposing hydrophobic patches, destabilizing the fold, or causing aggregation — any of which can reduce catalytic activity even without touching the active site directly (a classic allosteric/structural mechanism of loss-of-function mutations).\n\nDistractors:\nA — True that primary structure changes with any mutation (true-but-irrelevant to the functional question), but assuming automatic refolding to 'equally active' ignores that folding pathways depend on the exact sequence.\nB — Quaternary structure applies only to multi-subunit proteins and is not what is directly altered by a single buried substitution in one subunit's core.\nD — Overgeneralizes: alpha-helix formation depends on backbone hydrogen-bond geometry (phi/psi angles), not on side-chain hydrophobicity; hydrophobic residues are not 'required' for helices.\n\nDiagnostic focus: Trace how an interior hydrophobic→hydrophilic substitution disrupts tertiary folding via the hydrophobic effect, distinct from primary/secondary/quaternary structure.",
    "unit": "Unit 1",
    "big_idea": "SYI",
    "sp": "SP 1.B"
  },
  {
    "id": 3,
    "category": "Unit 1: Chemistry of Life — Topic 1.5: Nucleic Acid Structure — Chargaff's Rules",
    "skills": "SP 4.A: Describe patterns, relationships, or trends in data",
    "difficulty": "1 — Foundational",
    "stem": "The bar chart shows the base composition of double-stranded DNA from a mammalian cell, where thymine = 28%. Which set of values for adenine, guanine, and cytosine is consistent with the data shown, and what structural feature of DNA explains the pattern?",
    "visual": "<svg viewBox='0 0 380 240' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='380' height='240' fill='white'/><line x1='50' y1='20' x2='50' y2='200' stroke='#222'/><line x1='50' y1='200' x2='350' y2='200' stroke='#222'/><rect x='75' y='60' width='45' height='140' fill='#2980b9'/><text x='80' y='215' font-size='11'>A</text><rect x='140' y='60' width='45' height='140' fill='#c0392b'/><text x='145' y='215' font-size='11'>T = 28%</text><rect x='205' y='90' width='45' height='110' fill='#27ae60'/><rect x='270' y='90' width='45' height='110' fill='#8e44ad'/><text x='205' y='215' font-size='11'>G</text><text x='270' y='215' font-size='11'>C</text><text x='5' y='115' font-size='11' transform='rotate(-90 5,115)'>% of bases</text></svg>",
    "options": {
      "A": "A = 28%, G = 22%, C = 22%; complementary base pairing means A pairs with T (A% = T%) and G pairs with C (G% = C%); since all four percentages sum to 100%, G = C = (100 − 56)/2 = 22%",
      "B": "A = 28%, G = 24%, C = 20%; these values reflect independently regulated nucleotide pool sizes rather than base-pairing constraints",
      "C": "A = 14%, G = 29%, C = 29%; in the double helix each base pairs with its neighbor on the same strand, so A pairs with G and T pairs with C",
      "D": "A = 28%, G = 28%, C = 16%; complementary pairing applies only to purines, so cytosine varies independently of guanine"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nChargaff's rules follow directly from antiparallel complementary base pairing across the helix: every A on one strand faces a T on the other (A% = T% = 28%), and every G faces a C (G% = C%). With A+T+G+C = 100%, G = C = (100 − 56)/2 = 22%. Verification: 28+28+22+22 = 100%.\n\nDistractors:\nB — Nucleotide pool sizes do not fix the base ratios of already-assembled DNA; the ratios emerge from the pairing geometry of the double helix, not metabolic regulation.\nC — Bases pair across the two antiparallel strands, not with a neighbor along the same strand; this reverses the structural basis of the rule.\nD — Overgeneralizes 'applies only to purines'; Chargaff's equalities hold for all four bases because every purine pairs with a specific pyrimidine.\n\nDiagnostic focus: Apply A=T and G=C constraints to calculate unknown base percentages from one given value.",
    "unit": "Unit 1",
    "big_idea": "IST",
    "sp": "SP 4.A"
  },
  {
    "id": 4,
    "category": "Unit 1: Chemistry of Life — Topic 1.16: pH and Buffers in Biological Systems",
    "skills": "SP 6.A: Apply a formula or equation to quantify a biological situation",
    "difficulty": "3 — Analysis",
    "stem": "A cell's intracellular pH is 7.2. A metabolic disturbance increases [H+] fivefold. Using pH = −log10[H+], which value and reasoning correctly gives the new pH?",
    "visual": "<svg viewBox='0 0 400 160' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='160' fill='white'/><line x1='40' y1='80' x2='380' y2='80' stroke='#222' stroke-width='1.5'/><line x1='40' y1='70' x2='40' y2='90' stroke='#222'/><line x1='380' y1='70' x2='380' y2='90' stroke='#222'/><line x1='210' y1='70' x2='210' y2='90' stroke='#2980b9' stroke-width='2'/><circle cx='240' cy='80' r='4' fill='#c0392b'/><text x='195' y='60' font-size='11' fill='#2980b9'>pH 7.2 (start)</text><text x='230' y='115' font-size='11' fill='#c0392b'>? (after [H+] × 5)</text><text x='35' y='105' font-size='10'>0 (acidic)</text><text x='355' y='105' font-size='10'>14 (basic)</text></svg>",
    "options": {
      "A": "pH remains 7.2 because intracellular buffers maintain constant pH regardless of the size of any metabolic H+ disturbance",
      "B": "New pH = 7.2 − log10(5) = 7.2 − 0.70 = 6.50; a fivefold increase in [H+] lowers pH by log10(5) ≈ 0.70 units, an acidification of about 0.7 pH units",
      "C": "New pH = 7.2 × 5 = 36.0, because pH scales directly and proportionally with fold-changes in [H+]",
      "D": "New pH = 7.2 − 5 = 2.2, because an n-fold increase in [H+] subtracts n units directly from the current pH"
    },
    "correct": "B",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\npH = −log10[H+]. Initial [H+] = 10^−7.2; new [H+] = 5 × 10^−7.2. New pH = −log10(5 × 10^−7.2) = −log10(5) + 7.2 = 7.2 − 0.70 = 6.50, a drop of 0.70 pH units. General rule: an n-fold [H+] increase lowers pH by log10(n).\n\nA 0.7-unit drop is biologically large — most enzymes have narrow pH optima and lose substantial activity at pH 6.5; cellular buffers (phosphate, proteins) normally prevent swings this large, but severe metabolic acidosis can approach this magnitude.\n\nDistractors:\nA — True that buffers resist small pH changes, but buffer capacity is finite; it is overgeneralized to claim pH 'remains constant regardless of' disturbance size.\nC — Treats pH as a linear rather than logarithmic scale; multiplying pH by a fold-change has no chemical basis.\nD — Confuses the fold-change value (5) with the log-based unit shift; subtracting n directly ignores the logarithmic relationship entirely.\n\nDiagnostic focus: Correctly apply the logarithmic relationship between [H+] fold-change and pH-unit shift, in the correct (acidifying) direction.",
    "unit": "Unit 1",
    "big_idea": "SYI",
    "sp": "SP 6.A"
  },
  {
    "id": 5,
    "category": "Unit 1: Chemistry of Life — Topic 1.6: Lipids — Amphipathic Self-Assembly in mRNA Vaccine Delivery",
    "skills": "SP 1.B: Explain a concept, process, model, or mechanism",
    "difficulty": "2 — Application",
    "stem": "Lipid nanoparticles (LNPs) used to deliver mRNA vaccines contain ionizable phospholipids that spontaneously self-assemble around mRNA into a bilayer-like particle in aqueous solution. Which structural feature of these phospholipids, and which thermodynamic principle, best explains this spontaneous assembly?",
    "visual": "<svg viewBox='0 0 380 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='380' height='200' fill='white'/><circle cx='190' cy='100' r='70' fill='none' stroke='#222' stroke-width='2'/><g stroke='#2980b9' stroke-width='2'><line x1='140' y1='45' x2='150' y2='65'/><line x1='160' y1='35' x2='167' y2='58'/><line x1='185' y1='30' x2='188' y2='55'/><line x1='210' y1='35' x2='205' y2='58'/><line x1='235' y1='48' x2='222' y2='65'/></g><circle cx='138' cy='42' r='5' fill='#c0392b'/><circle cx='158' cy='32' r='5' fill='#c0392b'/><circle cx='185' cy='27' r='5' fill='#c0392b'/><circle cx='212' cy='32' r='5' fill='#c0392b'/><circle cx='237' cy='45' r='5' fill='#c0392b'/><text x='95' y='105' font-size='11'>hydrophobic</text><text x='95' y='118' font-size='11'>tails inward</text><text x='245' y='105' font-size='11'>polar heads</text><text x='245' y='118' font-size='11'>face water</text><text x='150' y='185' font-size='11'>mRNA-lipid nanoparticle cross-section</text></svg>",
    "options": {
      "A": "The phospholipids are amphipathic — a polar head group and nonpolar tails; in water, hydrophilic heads orient toward the aqueous phase while hydrophobic tails cluster together away from water, minimizing unfavorable nonpolar-water contact; this hydrophobic effect (increased entropy of surrounding water when nonpolar surfaces are shielded) drives spontaneous assembly without any energy input",
      "B": "The phospholipid head groups carry a net positive charge that causes mutual electrostatic repulsion, forcing the molecules into an organized particle to minimize head-group repulsion",
      "C": "The phospholipid tails form new covalent carbon-carbon bonds with neighboring tails during assembly, producing a continuous polymer shell that encapsulates the mRNA",
      "D": "Lipid nanoparticle assembly requires ATP hydrolysis; cellular motor proteins actively position each phospholipid into the particle using free energy released from ATP"
    },
    "correct": "A",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nThe same amphipathic self-assembly principle that governs cell membranes is exploited in mRNA-LNP vaccine technology: hydrophilic head groups face water while hydrophobic tails cluster in the particle interior, driven by the hydrophobic effect — ordering water around exposed nonpolar surfaces is entropically unfavorable, so burying those surfaces maximizes the entropy of surrounding water and lowers overall free energy (ΔG < 0), making assembly spontaneous with no energy input required.\n\nDistractors:\nB — Real phospholipid head groups are typically polar/zwitterionic, not uniformly positively charged; electrostatic repulsion is not the primary assembly driver.\nC — Lipid tails are held together only by noncovalent hydrophobic interactions; no covalent polymerization occurs, and the particle is dynamic and reversible, unlike a polymer shell.\nD — Self-assembly is spontaneous and thermodynamically favorable (ΔG < 0); it requires no ATP or motor proteins, which is why LNPs can be manufactured cell-free.\n\nDiagnostic focus: Link amphipathic structure to the hydrophobic effect as the thermodynamic driving force, applied to a real biotechnology context.",
    "unit": "Unit 1",
    "big_idea": "SYI",
    "sp": "SP 1.B"
  },
  {
    "id": 6,
    "category": "Unit 2: Cell Structure and Function — Topic 2.7: Selective Permeability of Membranes",
    "skills": "SP 1.B: Explain a concept, process, model, or mechanism",
    "difficulty": "2 — Application",
    "stem": "The diagram shows a bacterial cell placed in a solution with solute concentration higher than the cytoplasm. Which description of the resulting water movement and its rate-limiting membrane feature is most accurate?",
    "visual": "<svg viewBox='0 0 420 190' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='420' height='190' fill='white'/><circle cx='120' cy='95' r='55' fill='#eaf3fb' stroke='#222' stroke-width='2'/><circle cx='120' cy='95' r='40' fill='#d6ecf5' stroke='#2980b9' stroke-width='1.5'/><text x='75' y='98' font-size='10'>cytoplasm</text><text x='60' y='30' font-size='11'>low solute (external)</text><text x='300' y='95' font-size='40' fill='#c0392b'>→</text><circle cx='330' cy='95' r='55' fill='#f9e9e9' stroke='#222' stroke-width='2'/><circle cx='330' cy='95' r='30' fill='#e9d3d3' stroke='#2980b9' stroke-width='1.5'/><text x='295' y='98' font-size='10'>shrunken</text><text x='270' y='30' font-size='11'>high solute (external)</text><text x='60' y='175' font-size='10'>Water moves by osmosis across the selectively permeable membrane</text></svg>",
    "options": {
      "A": "Water moves out of the cell by osmosis, following its own concentration gradient from the cytoplasm (higher water concentration) to the external solution (lower water concentration); the cell shrinks; the rate of movement is set largely by the membrane's water permeability, which is greatly increased by aquaporin channels",
      "B": "Water moves into the cell because the higher external solute concentration creates a hydrostatic pressure gradient that drives bulk fluid flow inward, causing the cell to swell and potentially lyse",
      "C": "Solute molecules diffuse into the cell down their concentration gradient while no water movement occurs, because osmosis requires active transport of water molecules across the membrane",
      "D": "Neither water nor solutes move because the bacterial cell wall completely prevents any osmotic change regardless of the external solute concentration"
    },
    "correct": "A",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nThe external solution is hypertonic relative to the cytoplasm. Water moves by osmosis from the region of higher water concentration (cytoplasm) to lower water concentration (outside) — down water's own gradient, which is opposite the solute gradient. The cell loses volume (plasmolysis in walled cells). Because the lipid bilayer has low intrinsic water permeability, aquaporin channels — where present — greatly increase the rate at which osmotic equilibrium is approached.\n\nDistractors:\nB — Describes the response to a hypotonic solution; here the external solution is hypertonic, so water leaves rather than entering.\nC — Osmosis is itself passive movement of water, not active transport; claiming osmosis 'requires active transport' inverts the definition, and the lipid bilayer is largely impermeable to the solutes described here.\nD — Overgeneralizes: bacterial cell walls prevent lysis by resisting excessive swelling, but they do not block osmotic water movement or plasmolysis in hypertonic conditions.\n\nDiagnostic focus: Identify water-movement direction correctly from a tonicity comparison and connect rate to aquaporin-mediated membrane permeability.",
    "unit": "Unit 2",
    "big_idea": "SYI",
    "sp": "SP 1.B"
  },
  {
    "id": 7,
    "category": "Unit 2: Cell Structure and Function — Topic 2.3: Intracellular Protein Sorting — The Endomembrane System",
    "skills": "SP 1.A: Describe a concept, process, model, or mechanism",
    "difficulty": "3 — Analysis",
    "stem": "A pancreatic acinar cell synthesizes and secretes digestive enzymes. Which sequence correctly traces a newly made secretory enzyme from its ribosome to release outside the cell?",
    "options": {
      "A": "Ribosome in the nucleus (translation occurs there) → smooth ER for glycosylation → Golgi apparatus removes the signal sequence → secretory vesicles → exocytosis",
      "B": "Ribosome docks at rough ER via signal recognition particle → co-translational import into the ER lumen (folding, N-linked glycosylation, quality control) → COPII vesicles to the Golgi apparatus (further glycan modification, proteolytic processing) → secretory (zymogen) vesicles → fusion with the plasma membrane and exocytosis",
      "C": "Free ribosome in the cytoplasm → protein folds in the cytosol → captured directly into a secretory vesicle without entering the ER → Golgi apparatus → plasma membrane",
      "D": "Ribosome on rough ER → ER lumen → mitochondria for ATP-dependent folding → Golgi apparatus → lysosomes, where final proteolytic activation occurs before secretion"
    },
    "correct": "B",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nThe secretory pathway: the signal recognition particle (SRP) pauses translation and docks the ribosome at the rough ER Sec61 translocon; co-translational translocation feeds the polypeptide into the ER lumen, where signal-peptide cleavage, chaperone-assisted folding, and N-linked glycosylation occur, along with ER quality control. Correctly folded protein buds off in COPII vesicles to the Golgi, where glycans are further modified and zymogens are processed; the trans-Golgi network sorts enzymes into zymogen granules that fuse with the apical membrane upon a secretory stimulus.\n\nDistractors:\nA — Translation occurs at ribosomes in the cytoplasm or on the rough ER, never inside the nucleus, which lacks ribosomes and translation machinery.\nC — Secretory proteins destined for regulated exocytosis cannot bypass the ER; they require ER-lumen glycosylation and quality control before reaching the Golgi.\nD — Mitochondria are not part of the secretory pathway, and this protein is destined for exocytosis via zymogen granules, not lysosomal degradation.\n\nDiagnostic focus: Sequence all stations of the secretory pathway (ribosome→ER→Golgi→secretory vesicle→exocytosis) with the correct event at each stop.",
    "unit": "Unit 2",
    "big_idea": "SYI",
    "sp": "SP 1.A"
  },
  {
    "id": 8,
    "category": "Unit 2: Cell Structure and Function — Topic 2.9: Enzyme Structure and Catalysis — Michaelis-Menten Kinetics",
    "skills": "SP 6.A: Apply a formula or equation to quantify a biological situation",
    "difficulty": "3 — Analysis",
    "stem": "The graph shows a Michaelis-Menten curve for an enzyme with Km = 4 µM and Vmax = 60 µM/min. Based on the equation V = Vmax[S]/(Km + [S]), what is the reaction velocity at [S] = 12 µM, and what fraction of Vmax does it represent?",
    "visual": "<svg viewBox='0 0 400 240' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='240' fill='white'/><line x1='50' y1='20' x2='50' y2='210' stroke='#222'/><line x1='50' y1='210' x2='380' y2='210' stroke='#222'/><line x1='50' y1='40' x2='380' y2='40' stroke='#bbb' stroke-dasharray='4'/><text x='355' y='36' font-size='10'>Vmax=60</text><line x1='50' y1='125' x2='380' y2='125' stroke='#bbb' stroke-dasharray='4'/><text x='355' y='121' font-size='10'>Vmax/2</text><path d='M50,210 C120,90 180,55 380,42' fill='none' stroke='#2980b9' stroke-width='2.5'/><line x1='120' y1='210' x2='120' y2='125' stroke='#c0392b' stroke-dasharray='3'/><text x='95' y='225' font-size='10'>Km=4µM</text><circle cx='260' cy='79' r='4' fill='#c0392b'/><line x1='260' y1='79' x2='260' y2='210' stroke='#c0392b' stroke-dasharray='3'/><text x='230' y='225' font-size='10'>[S]=12µM</text><text x='5' y='120' font-size='11' transform='rotate(-90 5,120)'>Velocity (µM/min)</text></svg>",
    "options": {
      "A": "V = 45 µM/min, 75% of Vmax: V = 60 × 12/(4+12) = 60 × 0.75 = 45 µM/min; fraction = 45/60 = 0.75",
      "B": "V = 30 µM/min, 50% of Vmax, because 12 µM substrate is well above Km, which by itself is defined as the half-maximal point",
      "C": "V = 60 µM/min, 100% of Vmax, because [S] = 12 µM is above Km = 4 µM, so the enzyme must already be fully saturated",
      "D": "V = 20 µM/min, 33% of Vmax, using V = Vmax × Km/(Km+[S]) = 60 × 4/16, which inverts the numerator and denominator of the Michaelis-Menten equation"
    },
    "correct": "A",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nV = Vmax[S]/(Km+[S]) = 60 × 12/(4+12) = 720/16 = 45 µM/min; fraction of Vmax = 45/60 = 0.75 (75%). At [S] = 3×Km, the enzyme runs at 75% of Vmax, consistent with the curve's known landmarks: [S]=Km gives 50% Vmax, [S]=9×Km gives 90% Vmax, and saturation is approached only asymptotically as [S]→∞.\n\nDistractors:\nB — 50% of Vmax occurs specifically when [S] = Km (4 µM), not at [S] = 12 µM; this distractor misapplies the definition of Km to a different substrate concentration.\nC — Overgeneralizes 'above Km' as equivalent to saturation; true saturation (≈100% Vmax) requires [S] >> Km, typically ≥10×Km, not just [S] > Km.\nD — Inverts the equation's numerator and denominator, which would nonsensically predict velocity decreasing as substrate increases beyond Km.\n\nDiagnostic focus: Substitute correctly into the Michaelis-Menten equation and recognize that [S] > Km does not by itself imply saturation.",
    "unit": "Unit 2",
    "big_idea": "SYI",
    "sp": "SP 6.A"
  },
  {
    "id": 9,
    "category": "Unit 2: Cell Structure and Function — Topic 2.5: Cell Communication — RTK Signal Transduction and Targeted Cancer Therapy",
    "skills": "SP 1.B: Explain a concept, process, model, or mechanism",
    "difficulty": "2 — Application",
    "stem": "The graph shows tumor volume over time in mice bearing EGFR-mutant lung tumors, comparing untreated animals to those given an EGFR (a receptor tyrosine kinase) inhibitor. EGFR inhibitors are used clinically to treat certain lung cancers with activating EGFR mutations. Which sequence best explains how blocking a receptor tyrosine kinase like EGFR reduces tumor growth?",
    "visual": "<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='220' fill='white'/><line x1='50' y1='20' x2='50' y2='190' stroke='#222'/><line x1='50' y1='190' x2='370' y2='190' stroke='#222'/><polyline points='50,150 120,120 190,85 260,55 330,30' fill='none' stroke='#c0392b' stroke-width='2.5'/><polyline points='50,150 120,148 190,150 260,145 330,140' fill='none' stroke='#2980b9' stroke-width='2.5'/><text x='260' y='45' font-size='11' fill='#c0392b'>untreated</text><text x='190' y='165' font-size='11' fill='#2980b9'>EGFR inhibitor</text><text x='150' y='210' font-size='12'>Days after tumor implant</text><text x='5' y='110' font-size='12' transform='rotate(-90 5,110)'>Tumor volume (mm³)</text></svg>",
    "options": {
      "A": "Ligand binds EGFR → EGFR dimerizes and transphosphorylates its own cytoplasmic tyrosines → phosphotyrosines recruit adaptor proteins (e.g., Grb2), activating the Ras-Raf-MEK-ERK cascade → active ERK enters the nucleus and phosphorylates transcription factors driving proliferation genes; the inhibitor blocks the initial kinase activity, cutting off this cascade",
      "B": "EGFR directly enters the nucleus as a transcription factor whenever ligand binds; the inhibitor works by preventing EGFR from physically translocating into the nucleus",
      "C": "EGFR activates adenylyl cyclase, raising cAMP, which activates PKA to phosphorylate CREB; this cAMP pathway is the exclusive route by which all receptor tyrosine kinases signal to the nucleus",
      "D": "EGFR signaling requires no downstream cascade because phosphorylated EGFR itself directly binds proliferation-gene promoters in the nucleus"
    },
    "correct": "A",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nEGFR is a receptor tyrosine kinase; ligand-induced dimerization and transautophosphorylation create docking sites for adaptor proteins that trigger the Ras-MAPK cascade (Ras→Raf→MEK→ERK), with active ERK entering the nucleus to phosphorylate transcription factors that drive cell-cycle genes. In EGFR-mutant lung cancers, this pathway is constitutively hyperactive; small-molecule EGFR inhibitors block the kinase domain, shutting down the cascade and slowing tumor growth, matching the flattened curve in the graph.\n\nDistractors:\nB — RTKs do not physically enter the nucleus as transcription factors; signal transmission occurs through cytoplasmic kinase cascades, not receptor translocation.\nC — The cAMP/PKA pathway is characteristic of Gs-coupled GPCRs, not RTKs; claiming it is the 'exclusive route' for all RTKs is an overgeneralization that misattributes a different receptor class's mechanism.\nD — Skips the entire kinase cascade that is the defining feature of RTK signal transduction and that is the actual drug target.\n\nDiagnostic focus: Trace RTK signal transduction from ligand binding to nuclear transcription-factor activation and connect it to a real cancer-therapy mechanism of action.",
    "unit": "Unit 2",
    "big_idea": "SYI",
    "sp": "SP 1.B"
  },
  {
    "id": 10,
    "category": "Unit 2: Cell Structure and Function — Topic 2.6: Feedback Mechanisms in Cell Communication",
    "skills": "SP 5.E: Predict outcomes of a proposed biological intervention",
    "difficulty": "3 — Analysis",
    "stem": "Receptor desensitization occurs when prolonged ligand exposure reduces a cell's response despite the ligand still being present. For a GPCR, which molecular mechanism most directly produces homologous desensitization?",
    "options": {
      "A": "GRK (G protein-coupled receptor kinase) phosphorylates only the agonist-activated receptor on cytoplasmic residues → phosphorylated receptor recruits beta-arrestin → beta-arrestin sterically blocks further G-protein coupling and triggers clathrin-mediated receptor internalization → reduced surface receptor number and G-protein activation despite continued ligand presence",
      "B": "Adenylyl cyclase becomes permanently, irreversibly hyperactive under prolonged stimulation, so cAMP accumulates without limit until the cell's response saturates and can no longer be measured as an increase",
      "C": "G-protein alpha subunits are permanently consumed because GDP-to-GTP exchange is irreversible, so the cellular G-protein pool is exhausted and cannot be replenished within the desensitization timeframe",
      "D": "The ligand itself is chemically converted by extracellular enzymes into a competitive antagonist, so desensitization is caused entirely by ligand modification rather than any change to the receptor"
    },
    "correct": "A",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nHomologous desensitization is specific to activated receptors: GRKs phosphorylate only agonist-occupied GPCRs, creating high-affinity binding sites for beta-arrestin. Beta-arrestin binding both sterically uncouples the receptor from its G protein (immediate signal attenuation) and recruits clathrin-adaptor machinery for receptor internalization, reducing surface receptor density and thus responsiveness even though ligand is still present.\n\nDistractors:\nB — Overgeneralizes cAMP accumulation as unlimited and 'permanent'; Gαs has intrinsic GTPase activity that terminates its own signaling, and PDEs continuously degrade cAMP, so accumulation is self-limiting, not runaway.\nC — GDP→GTP exchange is reversible; Gα subunits have intrinsic (and RGS-accelerated) GTPase activity that returns them to the inactive state, so the G-protein pool is not consumed or depleted.\nD — True in some contexts that extracellular enzymes degrade certain ligands (e.g., acetylcholinesterase), but this is a distinct process from receptor-based homologous desensitization and is not the general GPCR mechanism being asked about.\n\nDiagnostic focus: Identify GRK-mediated phosphorylation and beta-arrestin recruitment as the mechanism of homologous GPCR desensitization, distinct from ligand degradation or G-protein depletion.",
    "unit": "Unit 2",
    "big_idea": "SYI",
    "sp": "SP 5.E"
  },
  {
    "id": 11,
    "category": "Unit 3: Cellular Energetics — Topic 3.4: Light Reactions of Photosynthesis",
    "skills": "SP 4.B: Explain relationships in data or a model",
    "difficulty": "2 — Application",
    "stem": "The graph shows the rate of O2 evolution by isolated spinach chloroplasts as light intensity increases, then plateaus. Which explanation best accounts for both the electron source that keeps Photosystem II running and the plateau at high light intensity?",
    "visual": "<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='220' fill='white'/><line x1='50' y1='20' x2='50' y2='190' stroke='#222'/><line x1='50' y1='190' x2='370' y2='190' stroke='#222'/><path d='M50,190 C110,120 160,55 230,45 L370,42' fill='none' stroke='#27ae60' stroke-width='2.5'/><line x1='230' y1='45' x2='230' y2='190' stroke='#bbb' stroke-dasharray='4'/><text x='235' y='200' font-size='10'>light saturation</text><text x='140' y='210' font-size='12'>Light intensity (µmol photons/m²/s)</text><text x='5' y='110' font-size='12' transform='rotate(-90 5,110)'>O2 evolution rate</text></svg>",
    "options": {
      "A": "The oxygen-evolving complex (OEC) of Photosystem II splits water (2H2O → 4H+ + 4e− + O2), and the electrons replace those lost from excited P680; the plateau occurs once the rate of light absorption exceeds the maximum turnover rate of the downstream electron-transport and Calvin-cycle enzymes, so more light no longer increases the reaction rate",
      "B": "The OEC splits CO2 molecules to supply electrons to the transport chain, releasing O2 as a byproduct of CO2 oxidation before carbon fixation begins",
      "C": "The OEC pumps protons from the stroma into the lumen using energy from NADPH oxidation in the stroma, and the plateau reflects the chloroplast running out of protons to pump",
      "D": "The OEC reduces O2 to water during cyclic electron flow, and the plateau reflects P700 becoming light-saturated while P680 remains unlit at all intensities"
    },
    "correct": "A",
    "explanation": "Big Idea: ENE — Energetics\n\nWhen P680 is photo-oxidized, the Mn4CaO5-containing oxygen-evolving complex extracts electrons from water (2H2O → 4H+ + 4e− + O2), replacing the electrons P680 lost and releasing O2 as a byproduct — the source of the O2 measured in the graph. At low-to-moderate light, O2 evolution rises roughly linearly with photon flux because light absorption is rate-limiting. At high light, the curve plateaus because the maximal turnover rate of downstream components (plastoquinone pool, Calvin-cycle enzymes such as Rubisco) becomes rate-limiting instead — adding more light no longer speeds the reaction.\n\nDistractors:\nB — CO2 is reduced, not oxidized, and CO2 splitting does not occur in the light reactions; this confuses the light reactions with carbon fixation.\nC — Protons entering the lumen come mainly from water splitting and plastoquinol oxidation, not from 'NADPH oxidation in the stroma'; describing the plateau as running out of protons misattributes the rate-limiting step.\nD — Reverses the OEC's actual chemistry (it oxidizes water, not reduces O2) and incorrectly claims P680 is never excited by light.\n\nDiagnostic focus: Identify water as the electron donor to PSII and explain the light-saturation plateau as a shift in the rate-limiting step from light capture to enzymatic turnover.",
    "unit": "Unit 3",
    "big_idea": "ENE",
    "sp": "SP 4.B"
  },
  {
    "id": 12,
    "category": "Unit 3: Cellular Energetics — Topic 3.5: The Calvin Cycle",
    "skills": "SP 6.A: Apply a formula or equation to quantify a biological situation",
    "difficulty": "3 — Analysis",
    "stem": "To fix 6 CO2 molecules into the equivalent of one glucose via the Calvin cycle, how many total ATP and NADPH molecules are consumed?",
    "options": {
      "A": "6 ATP and 6 NADPH, assuming one ATP and one NADPH are consumed per CO2 fixed",
      "B": "18 ATP and 12 NADPH: per 3 CO2 fixed, 6 ATP + 6 NADPH reduce 3-PGA to G3P, and 3 more ATP regenerate RuBP (9 ATP + 6 NADPH per 3 CO2); doubling for 6 CO2 gives 18 ATP and 12 NADPH",
      "C": "12 ATP and 12 NADPH, because the cycle is assumed to require equal numbers of each cofactor at every step",
      "D": "12 ATP and 6 NADPH, assuming NADPH is used only once per CO2 while ATP is used twice per CO2"
    },
    "correct": "B",
    "explanation": "Big Idea: ENE — Energetics\n\nPer 3 CO2 fixed (yielding one net G3P): carbon fixation consumes no ATP/NADPH; reduction of 6 × 3-PGA to 6 × G3P consumes 6 ATP + 6 NADPH; RuBP regeneration from the remaining 5 G3P consumes 3 more ATP. Total per 3 CO2 = 9 ATP + 6 NADPH. For 6 CO2 (two net G3P, the glucose precursor): 18 ATP + 12 NADPH.\n\nDistractors:\nA — Substantially undercounts ATP by omitting the RuBP-regeneration step, which requires additional ATP beyond the reduction step.\nC — Assumes a 1:1 ATP:NADPH ratio, but the actual ratio is 3:2 because RuBP regeneration needs ATP but not NADPH.\nD — Assumes a 2:1 ATP:NADPH ratio, close to but not matching the correct 3:2 ratio, undercounting total ATP.\n\nDiagnostic focus: Track ATP and NADPH consumption separately across both the reduction step and the RuBP-regeneration step of the Calvin cycle.",
    "unit": "Unit 3",
    "big_idea": "ENE",
    "sp": "SP 6.A"
  },
  {
    "id": 13,
    "category": "Unit 3: Cellular Energetics — Topic 3.2: Cellular Respiration — Electron Transport Chain",
    "skills": "SP 1.B: Explain a concept, process, model, or mechanism",
    "difficulty": "2 — Application",
    "stem": "The graph shows cellular O2 consumption in isolated mitochondria before and after adding cyanide, which irreversibly blocks Complex IV by binding its heme iron. Which explanation of the resulting drop and its downstream effect on ATP synthesis is most accurate?",
    "visual": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='200' fill='white'/><line x1='50' y1='20' x2='50' y2='170' stroke='#222'/><line x1='50' y1='170' x2='370' y2='170' stroke='#222'/><polyline points='50,90 180,90' fill='none' stroke='#2980b9' stroke-width='2.5'/><line x1='180' y1='20' x2='180' y2='170' stroke='#c0392b' stroke-dasharray='4'/><text x='185' y='35' font-size='10' fill='#c0392b'>+ cyanide</text><polyline points='180,90 200,160 370,163' fill='none' stroke='#2980b9' stroke-width='2.5'/><text x='140' y='190' font-size='12'>Time</text><text x='5' y='100' font-size='12' transform='rotate(-90 5,100)'>O2 consumption rate</text></svg>",
    "options": {
      "A": "Blocking Complex IV halts the entire chain, because electrons cannot pass from cytochrome c to O2; Complexes I and III back up with electrons, the proton-motive force collapses, and ATP synthase stops; cells then rely only on glycolysis (2 ATP/glucose) instead of oxidative phosphorylation (~30 ATP/glucose), producing rapid energy failure",
      "B": "Blocking Complex IV affects only that one proton-pumping step; Complexes I and III continue normally, maintaining a partial proton gradient so ATP synthesis continues at roughly 60% of normal capacity",
      "C": "Blocking Complex IV stops O2 consumption but does not directly affect the proton gradient, which is said to dissipate slowly over several hours through independent membrane leak",
      "D": "Blocking Complex IV causes cytochrome c to accumulate in the intermembrane space and immediately trigger apoptosis before any ATP deficit could be detected"
    },
    "correct": "A",
    "explanation": "Big Idea: ENE — Energetics\n\nComplex IV is the terminal electron acceptor step (4 cyt c(Fe2+) + O2 + 4H+ → 4 cyt c(Fe3+) + 2H2O). When cyanide blocks it, cytochrome c cannot be reoxidized, so Complex III backs up, then the ubiquinone pool, then Complex I; NADH and FADH2 can no longer be oxidized, no protons are pumped, the proton-motive force collapses, and ATP synthase stops. Cells fall back on glycolysis alone (2 ATP/glucose vs. ~30 from full aerobic respiration), producing the rapid drop in O2 consumption and energy failure shown in the graph — the basis of cyanide toxicity.\n\nDistractors:\nB — Overgeneralizes that upstream complexes 'continue normally'; because electron flow is sequential, Complexes I and III cannot keep functioning once their downstream acceptors (Q pool, cyt c) are fully reduced and cannot accept more electrons.\nC — True-but-mismatched timescale: the proton gradient collapses within seconds to minutes (pumping stops immediately while leak continues), not over hours.\nD — Cytochrome c release does trigger apoptosis, but that is a separate, slower process; the immediate lethal effect is ATP depletion from ETC shutdown, which is the more direct consequence asked about here.\n\nDiagnostic focus: Explain how blocking one terminal complex propagates backward through the entire chain to collapse the proton-motive force and ATP synthesis.",
    "unit": "Unit 3",
    "big_idea": "ENE",
    "sp": "SP 1.B"
  },
  {
    "id": 14,
    "category": "Unit 3: Cellular Energetics — Topic 3.6: Fermentation",
    "skills": "SP 4.B: Explain relationships in data or a model",
    "difficulty": "1 — Foundational",
    "stem": "The graph shows blood lactate concentration in a runner during and after a sprint. Lactate rises sharply during the sprint and falls over the following 30 minutes. What is the metabolic purpose of lactate fermentation in exercising muscle, and what happens to the lactate produced?",
    "visual": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='200' fill='white'/><line x1='50' y1='20' x2='50' y2='170' stroke='#222'/><line x1='50' y1='170' x2='370' y2='170' stroke='#222'/><polyline points='50,160 90,60 130,45 200,80 280,130 370,155' fill='none' stroke='#8e44ad' stroke-width='2.5'/><line x1='130' y1='20' x2='130' y2='170' stroke='#bbb' stroke-dasharray='4'/><text x='95' y='35' font-size='10'>sprint ends</text><text x='140' y='190' font-size='12'>Time (min)</text><text x='5' y='100' font-size='12' transform='rotate(-90 5,100)'>Blood lactate (mM)</text></svg>",
    "options": {
      "A": "Lactate itself is a high-energy compound transported to mitochondria and directly oxidized for ATP without requiring oxygen, supplementing aerobic ATP production during the sprint",
      "B": "Fermentation regenerates NAD+ from NADH (pyruvate + NADH → lactate + NAD+), allowing glycolysis to keep producing ATP anaerobically when O2 delivery cannot keep pace; the ATP comes from glycolysis itself, not the fermentation step; lactate is exported, taken up by the liver (Cori cycle), and reconverted to glucose, explaining the decline seen after the sprint",
      "C": "Fermentation produces CO2 and ethanol as waste to remove excess pyruvate when mitochondria are overwhelmed; CO2 is exhaled and ethanol is cleared by the liver",
      "D": "Lactic acid fermentation never occurs in human muscle; hypoxic muscle instead relies on the pentose phosphate pathway to regenerate NADPH for glycolysis to continue"
    },
    "correct": "B",
    "explanation": "Big Idea: ENE — Energetics\n\nGlycolysis requires NAD+ as an electron acceptor; when O2-dependent NADH reoxidation cannot keep pace during intense exercise, lactate dehydrogenase regenerates NAD+ (pyruvate + NADH → lactate + NAD+), letting glycolysis continue making ATP by substrate-level phosphorylation even though the fermentation reaction itself yields no ATP. The rising then falling lactate curve reflects this anaerobic surge followed by export to the liver, where the Cori cycle converts lactate back to glucose via gluconeogenesis.\n\nDistractors:\nA — Lactate is not itself directly oxidized in mitochondria for ATP as fermentation's 'purpose'; the actual purpose is NAD+ regeneration, and ATP comes from glycolysis, not fermentation.\nC — Ethanol and CO2 are products of alcoholic fermentation in yeast, not lactic acid fermentation in human muscle — a near-miss confusion of fermentation types.\nD — Overgeneralizes with 'never occurs'; lactic acid fermentation is well-documented in human muscle, and the pentose phosphate pathway serves a different purpose (NADPH for biosynthesis), not NAD+ regeneration for glycolysis.\n\nDiagnostic focus: Distinguish fermentation's true purpose (NAD+ regeneration to sustain glycolytic ATP output) from a misconception that fermentation itself is an ATP-yielding or oxygen-replacing pathway.",
    "unit": "Unit 3",
    "big_idea": "ENE",
    "sp": "SP 4.B"
  },
  {
    "id": 15,
    "category": "Unit 3: Cellular Energetics — Topic 3.3: Cellular Respiration Overview — ATP Yield",
    "skills": "SP 6.A: Apply a formula or equation to quantify a biological situation",
    "difficulty": "2 — Application",
    "stem": "The bar chart shows ATP contributions from each stage of aerobic glucose oxidation using modern P/O ratios (NADH ≈ 2.5 ATP, FADH2 ≈ 1.5 ATP). Approximately how many total ATP are produced per glucose, and why is this lower than the older textbook value of 38?",
    "visual": "<svg viewBox='0 0 380 220' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='380' height='220' fill='white'/><line x1='50' y1='20' x2='50' y2='190' stroke='#222'/><line x1='50' y1='190' x2='350' y2='190' stroke='#222'/><rect x='75' y='170' width='45' height='20' fill='#2980b9'/><text x='70' y='205' font-size='10'>Glycolysis</text><rect x='140' y='150' width='45' height='40' fill='#27ae60'/><text x='130' y='205' font-size='10'>Pyruvate ox.</text><rect x='205' y='110' width='45' height='80' fill='#c0392b'/><text x='205' y='205' font-size='10'>TCA cycle</text><rect x='270' y='45' width='45' height='145' fill='#8e44ad'/><text x='260' y='205' font-size='10'>Ox. phos.</text><text x='5' y='110' font-size='11' transform='rotate(-90 5,110)'>ATP (per glucose)</text></svg>",
    "options": {
      "A": "About 30–32 ATP total: glycolysis nets 2 ATP + 2 NADH; pyruvate oxidation yields 2 NADH; the TCA cycle yields 2 ATP + 6 NADH + 2 FADH2; using 2.5 ATP/NADH and 1.5 ATP/FADH2 rather than the older idealized 3 and 2, and accounting for shuttle and transport costs, gives roughly 30–32 total",
      "B": "About 2 ATP total, since only substrate-level phosphorylation in glycolysis is counted and oxidative phosphorylation is considered too inefficient to contribute meaningfully",
      "C": "Exactly 38 ATP, the original textbook maximum, which remains the most accurate value because P/O ratios of 3 and 2 better reflect true mitochondrial efficiency",
      "D": "About 100 ATP, assuming each NADH yields roughly 10 ATP because aerobic respiration is described as 50-fold more efficient than glycolysis alone"
    },
    "correct": "A",
    "explanation": "Big Idea: ENE — Energetics\n\nSumming substrate-level phosphorylation (2 ATP glycolysis + 2 ATP TCA, as GTP) with oxidative phosphorylation using modern P/O ratios (10 NADH × 2.5 + 2 FADH2 × 1.5, adjusted for the cost of shuttling cytosolic NADH electrons into the mitochondrion) gives a total of roughly 30–32 ATP per glucose — lower than the older idealized value of 38 because measured H+/ATP stoichiometry at ATP synthase, and proton leak, are less efficient than the older assumed integer ratios.\n\nDistractors:\nB — Ignores oxidative phosphorylation entirely, which normally accounts for the large majority of ATP yield under aerobic conditions.\nC — Treats the older idealized textbook value as more accurate, when it is actually based on assumed perfect-coupling ratios that measured biochemistry does not support.\nD — Vastly overestimates NADH's ATP yield (≈2.5, not ≈10) and the overall efficiency comparison to glycolysis.\n\nDiagnostic focus: Apply modern P/O ratios correctly across all three stages of aerobic respiration to reach the ~30–32 ATP total shown in the chart.",
    "unit": "Unit 3",
    "big_idea": "ENE",
    "sp": "SP 6.A"
  },
  {
    "id": 16,
    "category": "Unit 4: Cell Communication and Cell Cycle — Topic 4.5: Cell Cycle Regulation — CDK-Cyclin Complexes",
    "skills": "SP 4.B: Explain relationships in data or a model",
    "difficulty": "2 — Application",
    "stem": "The graph shows cyclin B concentration oscillating through the cell cycle, rising during S and G2 and abruptly dropping during mitosis, while total CDK1 protein level (dashed line) stays constant. Which explanation of this pattern best accounts for ordered, one-way progression through the cycle?",
    "visual": "<svg viewBox='0 0 400 210' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='210' fill='white'/><line x1='50' y1='20' x2='50' y2='180' stroke='#222'/><line x1='50' y1='180' x2='370' y2='180' stroke='#222'/><polyline points='50,170 100,150 180,60 250,40 260,170 340,168' fill='none' stroke='#c0392b' stroke-width='2.5'/><polyline points='50,110 370,110' fill='none' stroke='#2980b9' stroke-width='2' stroke-dasharray='5'/><text x='280' y='105' font-size='10' fill='#2980b9'>total CDK1 (constant)</text><text x='150' y='55' font-size='10' fill='#c0392b'>cyclin B</text><text x='255' y='195' font-size='10'>M</text><text x='130' y='195' font-size='10'>S/G2</text><text x='140' y='205' font-size='12'>Cell cycle time</text></svg>",
    "options": {
      "A": "Cyclin B accumulates through S/G2 and binds CDK1 to activate MPF, which phosphorylates targets driving mitotic entry (nuclear envelope breakdown, chromosome condensation); at the metaphase-to-anaphase transition, APC/C ubiquitinates cyclin B for proteasomal degradation, abruptly inactivating CDK1 and allowing mitotic exit; because cyclin must be resynthesized for the next cycle, progression cannot run backward",
      "B": "CDK1 itself oscillates while cyclin B stays constant; the graph is describing CDK1 concentration, not cyclin B, and CDK1 degradation at mitosis explains the drop",
      "C": "Cyclin B directly catalyzes DNA replication, and its periodic degradation is what physically stops DNA synthesis at each checkpoint to prevent re-replication",
      "D": "Cyclin B and CDK1 are constitutively bound and always active; checkpoint proteins periodically block the active site to create the appearance of cyclin oscillation seen in the graph"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nCDK1 protein level stays roughly constant (dashed line) while cyclin B — the limiting, oscillating partner — accumulates through S/G2, activates CDK1 to form MPF, and drives mitotic entry. At the metaphase-to-anaphase transition, the APC/C E3 ubiquitin ligase tags cyclin B for proteasomal degradation, sharply inactivating CDK1 (the drop in the graph) and permitting mitotic exit. Because cyclin must be resynthesized from scratch for the next cycle, the process cannot simply reverse, enforcing unidirectional progression.\n\nDistractors:\nB — Misreads the graph's axis labels; it is cyclin B (not CDK1) that oscillates, while CDK1 protein level is the flat dashed line — a near-miss swap of which curve represents which molecule.\nC — Cyclin B is a regulatory protein, not an enzyme that catalyzes DNA replication; DNA polymerase and associated replication machinery perform that function.\nD — Contradicts the data shown: the graph depicts genuine cyclin B concentration change, not an appearance created by checkpoint masking of a constitutively active complex.\n\nDiagnostic focus: Correctly attribute the oscillating curve to cyclin B (not CDK1) and connect its synthesis/APC-mediated degradation cycle to unidirectional cell-cycle progression.",
    "unit": "Unit 4",
    "big_idea": "IST",
    "sp": "SP 4.B"
  },
  {
    "id": 17,
    "category": "Unit 4: Cell Communication and Cell Cycle — Topic 4.7: Apoptosis",
    "skills": "SP 1.A: Describe a concept, process, model, or mechanism",
    "difficulty": "3 — Analysis",
    "stem": "The intrinsic (mitochondrial) apoptosis pathway is triggered by intracellular stress signals such as DNA damage. Which sequence correctly describes activation of this pathway from stress signal to cell death?",
    "options": {
      "A": "Intracellular stress upregulates BH3-only proteins (e.g., PUMA, BIM), which neutralize anti-apoptotic Bcl-2/Bcl-xL and activate Bax/Bak → Bax/Bak oligomerize in the outer mitochondrial membrane, causing mitochondrial outer membrane permeabilization → cytochrome c release → apoptosome assembly (cytochrome c + APAF-1 + procaspase-9) → active caspase-9 cleaves executioner caspases-3/7 → cell death",
      "B": "Death receptors (TNFR1, Fas) on the cell surface are activated → FADD is recruited → caspase-8 is activated → caspase-3 is activated; this is termed 'intrinsic' because caspase-8 itself originates from within the cytoplasm",
      "C": "p53 directly cleaves Bcl-2 like a protease, releasing cytochrome c, which then activates caspase-3 without requiring apoptosome assembly",
      "D": "Lysosomal membrane permeabilization releases cathepsin B, which activates procaspase-9 directly, entirely independent of any mitochondrial involvement"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nIntracellular stress (DNA damage, oxidative stress) upregulates BH3-only proteins that tip the Bcl-2 family balance toward Bax/Bak activation, producing mitochondrial outer membrane permeabilization and cytochrome c release; cytoplasmic cytochrome c assembles the apoptosome with APAF-1 and procaspase-9, activating caspase-9, which in turn activates executioner caspases-3/7 to carry out apoptosis.\n\nDistractors:\nB — Describes the extrinsic (death-receptor) pathway, triggered by external ligands binding surface receptors — the opposite of an intracellular-stress-triggered pathway despite the tempting reasoning about caspase-8's cytoplasmic location.\nC — p53 is a transcription factor, not a protease; it upregulates pro-apoptotic genes (e.g., PUMA) rather than directly cleaving Bcl-2, and cytochrome c still requires apoptosome assembly to activate caspases.\nD — Lysosomal permeabilization is a non-canonical, minor cell-death route; the canonical intrinsic pathway requires mitochondrial MOMP and apoptosome formation, not lysosomal cathepsins acting alone.\n\nDiagnostic focus: Sequence BH3-only protein activation → MOMP → cytochrome c release → apoptosome → caspase cascade, and distinguish the intrinsic pathway from the extrinsic (death-receptor) pathway.",
    "unit": "Unit 4",
    "big_idea": "IST",
    "sp": "SP 1.A"
  },
  {
    "id": 18,
    "category": "Unit 4: Cell Communication and Cell Cycle — Topic 4.3: Cell Cycle Checkpoints — Population Growth",
    "skills": "SP 6.A: Apply a formula or equation to quantify a biological situation",
    "difficulty": "2 — Application",
    "stem": "The graph shows cell number over 48 hours for a culture released from a reversible CDK1 inhibitor (which blocks mitotic entry), starting at N0 = 1,000 cells with doubling time 20 hr (r = ln2/20 ≈ 0.035/hr) and carrying capacity K = 2×10^6. Which description of the curve and underlying model is most accurate?",
    "visual": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='200' fill='white'/><line x1='50' y1='20' x2='50' y2='170' stroke='#222'/><line x1='50' y1='170' x2='370' y2='170' stroke='#222'/><path d='M50,168 C150,166 250,150 370,110' fill='none' stroke='#27ae60' stroke-width='2.5'/><text x='140' y='190' font-size='12'>Hours post-release</text><text x='5' y='100' font-size='12' transform='rotate(-90 5,100)'>Cell number</text><text x='240' y='120' font-size='10'>N(48) ≈ ?</text></svg>",
    "options": {
      "A": "Because N stays far below K throughout (N/K < 0.003 at 48 hr), the logistic term (1−N/K) ≈ 1, so growth is essentially exponential: N(48) ≈ 1,000 × e^(0.035×48) ≈ 5,300 cells; the population has not yet approached carrying capacity",
      "B": "Cell number remains at 1,000 because the CDK1 inhibitor causes permanent, irreversible arrest even after removal from the medium",
      "C": "Cell number jumps directly to K = 2×10^6 within 48 hours because releasing a synchronized population causes all cells to divide simultaneously and immediately reach carrying capacity",
      "D": "Growth follows the logistic equation exactly as if N were already close to K, so the growth rate is already declining sharply by 48 hours despite the population being tiny relative to K"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nWith N0 = 1,000 << K = 2×10^6, the logistic correction term (1 − N/K) stays close to 1 across the full 48 hours (N reaches only ~5,300, so N/K ≈ 0.0027), meaning logistic growth is well-approximated by simple exponential growth: N(t) ≈ N0 e^(rt) = 1,000 × e^(0.035×48) ≈ 1,000 × e^1.68 ≈ 5,300 cells, matching the gently rising curve shown.\n\nDistractors:\nB — A CDK1 inhibitor used for synchronization is reversible; after washout, cells resume normal cycling rather than remaining permanently arrested.\nC — Synchronization causes cells to divide in near-unison, not to instantaneously reach carrying capacity; total cell count still follows the same growth mathematics regardless of synchrony.\nD — Incorrectly assumes the logistic-slowing effect is already significant at N << K; the (1−N/K) term is only meaningfully different from 1 once N approaches a substantial fraction of K.\n\nDiagnostic focus: Recognize when N << K justifies the exponential approximation of the logistic model and apply it correctly to compute population size.",
    "unit": "Unit 4",
    "big_idea": "IST",
    "sp": "SP 6.A"
  },
  {
    "id": 19,
    "category": "Unit 4: Cell Communication and Cell Cycle — Topic 4.1: Cell Communication — Signaling Modes",
    "skills": "SP 1.A: Describe a concept, process, model, or mechanism",
    "difficulty": "1 — Foundational",
    "stem": "Endocrine, paracrine, and autocrine signaling differ primarily in the distance between the secreting cell and the target cell. Which comparison of the three modes is most accurate?",
    "options": {
      "A": "Autocrine: a cell signals itself, with ligand binding receptors on the same cell that secreted it; paracrine: ligand diffuses a short distance to act on nearby cells; endocrine: hormones enter the bloodstream and act on distant target cells; the defining difference among the three is signaling distance, not receptor type",
      "B": "Endocrine signals act faster than paracrine signals because hormones are assumed to travel through the bloodstream at very high velocity, while paracrine signals diffuse comparatively slowly",
      "C": "Autocrine signaling is said to occur only in cancer cells as part of oncogenic transformation, and normal differentiated cells never signal themselves",
      "D": "Paracrine signals are described as acting on the same cell that produced them, while endocrine signals act on nearby cells and autocrine signals act on distant cells via the bloodstream"
    },
    "correct": "A",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nAutocrine signaling: a cell secretes a ligand that binds receptors on itself (e.g., activated T cells producing and responding to IL-2). Paracrine signaling: ligand acts on nearby, non-secreting cells over short diffusion distances (e.g., local growth factors, synaptic neurotransmitters). Endocrine signaling: hormones travel through the bloodstream to distant target tissues (e.g., insulin, cortisol). The three modes are distinguished by signaling distance, not by the receptor families or second-messenger systems involved.\n\nDistractors:\nB — Endocrine signaling is actually slower overall than local/synaptic signaling because hormones must circulate through the blood to reach distant targets, reversing the claim.\nC — Overgeneralizes with 'only in cancer cells' and 'never'; autocrine signaling is a normal physiological mechanism (e.g., immune cell activation, wound healing) as well as a feature exploited by some cancers.\nD — Completely swaps the definitions of all three signaling modes.\n\nDiagnostic focus: Correctly map each signaling mode (autocrine, paracrine, endocrine) to the correct relationship between secreting and target cell distance.",
    "unit": "Unit 4",
    "big_idea": "SYI",
    "sp": "SP 1.A"
  },
  {
    "id": 20,
    "category": "Unit 4: Cell Communication and Cell Cycle — Topic 4.4: Second Messengers — cAMP",
    "skills": "SP 4.B: Explain relationships in data or a model",
    "difficulty": "3 — Analysis",
    "stem": "The graph shows intracellular cAMP in cardiac myocytes after epinephrine is added: a rapid rise (0–30 s), a plateau (30 s–3 min), then a decline back toward baseline (3–10 min) even though epinephrine is still present in the bath. Which mechanism best explains the decline?",
    "visual": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='200' fill='white'/><line x1='50' y1='20' x2='50' y2='170' stroke='#222'/><line x1='50' y1='170' x2='370' y2='170' stroke='#222'/><polyline points='50,160 90,50 180,45 260,90 370,150' fill='none' stroke='#e67e22' stroke-width='2.5'/><text x='60' y='190' font-size='10'>0</text><text x='170' y='190' font-size='10'>30s–3min</text><text x='330' y='190' font-size='10'>10min</text><text x='5' y='100' font-size='12' transform='rotate(-90 5,100)'>[cAMP]</text></svg>",
    "options": {
      "A": "Phosphodiesterases (PDEs) hydrolyze cAMP to 5'-AMP throughout the response; initially, receptor-driven adenylyl cyclase activity exceeds PDE activity (net rise), but over time GRK/beta-arrestin-mediated receptor desensitization and PKA-mediated feedback inhibition of adenylyl cyclase reduce cAMP synthesis, shifting the balance toward PDE-dominated degradation and returning cAMP to baseline",
      "B": "cAMP is not degraded at all; the decline reflects cAMP redistributing from the cytoplasm into the mitochondria for use in ATP synthesis, so total cellular cAMP is unchanged",
      "C": "Epinephrine is fully degraded by extracellular COMT by the 3-minute mark, so cAMP decline simply tracks ligand disappearance with a short time lag",
      "D": "PKA permanently and irreversibly inactivates adenylyl cyclase after 3 minutes, so the cell must synthesize entirely new adenylyl cyclase protein (requiring 24–48 hours) before it can respond to epinephrine again"
    },
    "correct": "A",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\ncAMP level reflects the balance between adenylyl-cyclase-driven synthesis and PDE-driven hydrolysis. The initial rise occurs because receptor-stimulated synthesis outpaces degradation; as GRK phosphorylates the agonist-occupied receptor and beta-arrestin uncouples it from Gs (plus PKA-mediated feedback inhibition of adenylyl cyclase), synthesis falls while PDE-mediated hydrolysis continues, driving cAMP back toward baseline even though epinephrine remains present.\n\nDistractors:\nB — cAMP is not shuttled into mitochondria as a signaling-termination mechanism; it is enzymatically hydrolyzed by PDEs to 5'-AMP.\nC — COMT does metabolize catecholamines, but even with epinephrine still present in this experiment, cAMP would still decline via receptor desensitization and PDE activity — this option misattributes the mechanism to ligand disappearance.\nD — Adenylyl cyclase inhibition by PKA-mediated phosphorylation is a real, reversible feedback mechanism, not a permanent inactivation requiring new protein synthesis over days.\n\nDiagnostic focus: Explain cAMP decline as resulting jointly from receptor desensitization (reducing synthesis) and ongoing PDE-mediated degradation, not simple ligand loss.",
    "unit": "Unit 4",
    "big_idea": "SYI",
    "sp": "SP 4.B"
  },
  {
    "id": 21,
    "category": "Unit 5: Heredity — Topic 5.1: Meiosis and Genetic Diversity — Crossing Over",
    "skills": "SP 1.B: Explain a concept, process, model, or mechanism",
    "difficulty": "2 — Application",
    "stem": "The diagram shows a bivalent (tetrad) during prophase I with a single chiasma between two non-sister chromatids. Which description of the molecular mechanism and timing of this event is most accurate?",
    "visual": "<svg viewBox='0 0 380 190' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='380' height='190' fill='white'/><line x1='90' y1='30' x2='90' y2='160' stroke='#2980b9' stroke-width='5'/><line x1='115' y1='30' x2='115' y2='95' stroke='#2980b9' stroke-width='5'/><line x1='115' y1='95' x2='260' y2='95' stroke='#2980b9' stroke-width='5'/><line x1='260' y1='95' x2='260' y2='160' stroke='#2980b9' stroke-width='5'/><line x1='260' y1='30' x2='260' y2='95' stroke='#c0392b' stroke-width='5'/><line x1='260' y1='95' x2='115' y2='95' stroke='#c0392b' stroke-width='5' opacity='0'/><line x1='285' y1='30' x2='285' y2='160' stroke='#c0392b' stroke-width='5'/><circle cx='187' cy='95' r='6' fill='#222'/><text x='150' y='115' font-size='11'>chiasma</text><text x='60' y='20' font-size='10'>maternal homolog</text><text x='255' y='20' font-size='10'>paternal homolog</text><text x='90' y='180' font-size='10'>non-sister chromatids exchange segments</text></svg>",
    "options": {
      "A": "Crossing over occurs during prophase I as homologous chromosomes synapse as bivalents; SPO11 creates a programmed double-strand break in one chromatid, which is repaired using the homologous chromosome as template, producing reciprocal exchange between non-sister chromatids of homologous chromosomes and new allele combinations",
      "B": "Crossing over occurs between sister chromatids of the same chromosome, exchanging identical segments in a process equivalent to routine DNA repair that does not change allele combinations",
      "C": "Crossing over results from random topoisomerase II errors during prophase I, repaired by non-homologous end joining, which occasionally joins the wrong chromosomes and creates new allele combinations as an accidental repair byproduct",
      "D": "Crossing over occurs during S phase interphase simultaneously with DNA replication, when replication machinery occasionally switches template strands between homologous chromosomes"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nDuring prophase I, homologous chromosomes synapse via the synaptonemal complex; SPO11 (a topoisomerase-II-like enzyme) creates programmed double-strand breaks, which are repaired using the homologous chromosome as a template via strand invasion (RAD51/DMC1) and Holliday-junction resolution, producing reciprocal exchange between non-sister chromatids of homologous chromosomes — the chiasma visible in the diagram — and generating new combinations of parental alleles.\n\nDistractors:\nB — Exchange between sister chromatids (which are genetically identical) would not create new allele combinations, unlike exchange between homologs, which carry different alleles.\nC — Meiotic recombination is a highly regulated, programmed process initiated by SPO11, not random breakage-and-repair error; NHEJ would not reliably produce the precise homologous exchange required.\nD — Recombination occurs in prophase I of meiosis I, after premeiotic S-phase replication is already complete, not simultaneously with replication itself.\n\nDiagnostic focus: Identify the correct timing (prophase I), initiating enzyme (SPO11), and partner chromatids (non-sister, homologous) for meiotic crossing over.",
    "unit": "Unit 5",
    "big_idea": "IST",
    "sp": "SP 1.B"
  },
  {
    "id": 22,
    "category": "Unit 5: Heredity — Topic 5.3: Non-Mendelian Genetics — Heritability",
    "skills": "SP 5.B: Justify a scientific claim using evidence",
    "difficulty": "2 — Application",
    "stem": "The bar chart summarizes a twin study estimating heritability (h²) of adult height at 0.80 in a particular population. Which interpretation of h² = 0.80 is correct?",
    "visual": "<svg viewBox='0 0 340 190' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='340' height='190' fill='white'/><line x1='50' y1='20' x2='50' y2='160' stroke='#222'/><line x1='50' y1='160' x2='300' y2='160' stroke='#222'/><rect x='90' y='40' width='60' height='120' fill='#2980b9'/><text x='95' y='175' font-size='10'>Genetic (80%)</text><rect x='190' y='130' width='60' height='30' fill='#e67e22'/><text x='190' y='175' font-size='10'>Environ. (20%)</text><text x='5' y='100' font-size='11' transform='rotate(-90 5,100)'>% of variance</text></svg>",
    "options": {
      "A": "In this population and environment, 80% of the variation among individuals in height is statistically attributable to genetic differences among them, and this value can shift if the population's genetic makeup or the range of environments changes",
      "B": "80% of any one individual's height is fixed by their genes and 20% by environment, so removing all environmental influence would leave that person 80% as tall as they actually are",
      "C": "h² = 0.80 is a fixed biological constant that applies to all human populations and environments and can be used to explain average height differences between populations",
      "D": "Because h² = 0.80 within this population, height differences between two different populations (e.g., differing in average nutrition) must also be about 80% genetic in origin"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nHeritability is a population-level statistic describing the proportion of variance in a trait, within a specific population and environment, attributable to genetic differences among individuals — not a statement about any individual, and not a fixed constant, because it changes if the population's genetic variance or environmental range changes.\n\nDistractors:\nB — Misapplies a population-variance statistic to an individual, as if 80% of a single person's height were 'caused' by genes in a way that could be isolated by removing environment — heritability says nothing about individuals.\nC — Overgeneralizes h² as a universal constant; it is specific to the population and environmental range studied and is not transferable to other populations without new data.\nD — Commits the classic within-group/between-group heritability fallacy (the Lewontin argument): high within-population heritability provides no information about the cause of between-population differences, which could be entirely environmental.\n\nDiagnostic focus: Correctly interpret heritability as population-level variance explained by genetics in a specific context, rejecting individual-level and cross-population extrapolations.",
    "unit": "Unit 5",
    "big_idea": "IST",
    "sp": "SP 5.B"
  },
  {
    "id": 23,
    "category": "Unit 5: Heredity — Topic 5.2: Mendelian Genetics — Dihybrid Crosses",
    "skills": "SP 6.A: Apply a formula or equation to quantify a biological situation",
    "difficulty": "1 — Foundational",
    "stem": "The Punnett square represents a dihybrid cross AaBb × AaBb, where A (round) is dominant over a (wrinkled) and B (yellow) is dominant over b (green). What fraction of offspring is expected to have wrinkled, green seeds (aabb)?",
    "visual": "<svg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='320' height='320' fill='white'/><g font-size='11'><text x='95' y='25'>AB</text><text x='155' y='25'>Ab</text><text x='215' y='25'>aB</text><text x='275' y='25'>ab</text><text x='20' y='75'>AB</text><text x='20' y='125'>Ab</text><text x='20' y='175'>aB</text><text x='20' y='225'>ab</text></g><line x1='55' y1='40' x2='300' y2='40' stroke='#222'/><line x1='55' y1='40' x2='55' y2='240' stroke='#222'/><line x1='55' y1='90' x2='300' y2='90' stroke='#ccc'/><line x1='55' y1='140' x2='300' y2='140' stroke='#ccc'/><line x1='55' y1='190' x2='300' y2='190' stroke='#ccc'/><line x1='55' y1='240' x2='300' y2='240' stroke='#ccc'/><line x1='115' y1='40' x2='115' y2='240' stroke='#ccc'/><line x1='175' y1='40' x2='175' y2='240' stroke='#ccc'/><line x1='235' y1='40' x2='235' y2='240' stroke='#ccc'/><rect x='235' y='190' width='65' height='50' fill='#f4d6d6'/><text x='245' y='220' font-size='11'>aabb</text><text x='60' y='270' font-size='11'>15 of 16 boxes = round or yellow (A_ or B_); 1 box = aabb</text></svg>",
    "options": {
      "A": "1/16, because P(aa) = 1/4 from Aa×Aa, P(bb) = 1/4 from Bb×Bb, and the two genes assort independently so P(aabb) = P(aa) × P(bb) = 1/4 × 1/4 = 1/16, matching the single aabb cell in the 16-box Punnett square",
      "B": "1/4, using only P(aa) = 1/4 and treating that as the answer without also requiring P(bb)",
      "C": "1/9, drawn from a mistaken 9:3:3:1 denominator applied to a single phenotype class rather than the 1/16 aabb cell",
      "D": "3/16, the fraction of round, green (A_bb) offspring rather than wrinkled, green (aabb) offspring"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nBy independent assortment, P(aa) = 1/4 and P(bb) = 1/4 are independent events, so P(aabb) = 1/4 × 1/4 = 1/16 — consistent with exactly one of the sixteen boxes in the Punnett square being aabb, and with the 9:3:3:1 ratio (9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb).\n\nDistractors:\nB — Applies independent assortment for gene A only and stops, omitting the second gene's probability.\nC — 1/9 does not arise from any correct application of the product rule to this cross; it is not a valid denominator for a 16-box dihybrid grid.\nD — 3/16 correctly identifies the A_bb (round, green) class but answers the wrong phenotype — the question asks for wrinkled, green (aabb), not round, green.\n\nDiagnostic focus: Apply the product rule of probability to two independently assorting gene pairs and correctly match genotype to phenotype (aabb = wrinkled, green).",
    "unit": "Unit 5",
    "big_idea": "IST",
    "sp": "SP 6.A"
  },
  {
    "id": 24,
    "category": "Unit 5: Heredity — Topic 5.5: Linked Genes — Genetic Mapping",
    "skills": "SP 6.A: Apply a formula or equation to quantify a biological situation",
    "difficulty": "3 — Analysis",
    "stem": "The diagram shows testcross results for AaBb (A and B in cis, on the same parental chromosome) × aabb: 42% AB, 42% ab, 8% Ab, 8% aB gametes. What is the map distance between genes A and B, and which gametes are recombinant?",
    "visual": "<svg viewBox='0 0 400 170' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='170' fill='white'/><line x1='30' y1='40' x2='370' y2='40' stroke='#222' stroke-width='3'/><circle cx='90' cy='40' r='6' fill='#2980b9'/><text x='70' y='25' font-size='11'>A</text><circle cx='260' cy='40' r='6' fill='#c0392b'/><text x='250' y='25' font-size='11'>B</text><text x='150' y='70' font-size='11'>16% recombination frequency = 16 map units (cM)</text><rect x='40' y='95' width='80' height='22' fill='#2980b9'/><text x='45' y='111' font-size='10' fill='white'>AB 42%</text><rect x='40' y='122' width='80' height='22' fill='#2980b9'/><text x='45' y='138' font-size='10' fill='white'>ab 42%</text><rect x='230' y='95' width='40' height='22' fill='#c0392b'/><text x='235' y='111' font-size='10' fill='white'>Ab 8%</text><rect x='230' y='122' width='40' height='22' fill='#c0392b'/><text x='235' y='138' font-size='10' fill='white'>aB 8%</text><text x='40' y='160' font-size='10'>parental (blue)</text><text x='230' y='160' font-size='10'>recombinant (red)</text></svg>",
    "options": {
      "A": "50 cM, treating the genes as unlinked because they are on the same chromosome; Ab and aB are the parental classes",
      "B": "16 cM: the recombinant gametes are Ab and aB (8% + 8% = 16%), since 1 cM = 1% recombination frequency, so map distance = 16 cM",
      "C": "84 cM, treating the parental classes (AB + ab = 84%) as if they were the recombination frequency",
      "D": "42 cM, using only the most frequent single gamete class as the map distance"
    },
    "correct": "B",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nBecause the parent is cis (A-B on one homolog, a-b on the other), the parental (non-crossover) gametes are AB and ab (42% each), while Ab and aB arise only from a crossover between the two loci (8% each). Map distance = total recombinant frequency = 8% + 8% = 16 cM, meaning a crossover occurs between A and B in 16% of meioses.\n\nDistractors:\nA — 50 cM (independent assortment) would require the two genes to be on different chromosomes or extremely far apart on the same one; here the strong excess of parental classes shows tight linkage, not independence.\nC — Confuses parental frequency with recombination frequency; using the majority (parental) class as if it were the recombinant fraction inflates the estimate far beyond the biologically possible maximum of 50%.\nD — Map distance is defined by the sum of recombinant gametes, not by the frequency of any single gamete class.\n\nDiagnostic focus: Identify parental vs. recombinant gamete classes from the cis configuration, then sum recombinant frequencies to compute map distance.",
    "unit": "Unit 5",
    "big_idea": "IST",
    "sp": "SP 6.A"
  },
  {
    "id": 25,
    "category": "Unit 5: Heredity — Topic 5.4: Non-Mendelian Inheritance — Genomic Imprinting",
    "skills": "SP 5.E: Predict outcomes of a genetic scenario",
    "difficulty": "3 — Analysis",
    "stem": "The diagram shows chromosome 15q11-q13: UBE3A is expressed only from the maternal allele in neurons (paternal copy silenced), while the Prader-Willi region genes are expressed only from the paternal allele (maternal copy silenced). A child inherits two copies of chromosome 15 from the mother and none from the father (maternal uniparental disomy). Which outcome is correctly predicted?",
    "visual": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='200' fill='white'/><rect x='40' y='30' width='24' height='120' rx='10' fill='#2980b9'/><text x='15' y='20' font-size='10'>maternal 15</text><text x='42' y='60' font-size='9' fill='white'>UBE3A</text><text x='42' y='110' font-size='9' fill='white'>ON</text><rect x='100' y='30' width='24' height='120' rx='10' fill='#2980b9'/><text x='75' y='20' font-size='10'>maternal 15</text><text x='102' y='60' font-size='9' fill='white'>PWS</text><text x='102' y='110' font-size='9' fill='white'>OFF</text><text x='160' y='95' font-size='30'>+</text><text x='150' y='170' font-size='11'>no paternal chromosome 15 (maternal UPD)</text><text x='200' y='60' font-size='11'>Both maternal copies: UBE3A active (2 copies)</text><text x='200' y='90' font-size='11'>Both maternal copies: PWS-region genes silenced</text></svg>",
    "options": {
      "A": "The child develops Angelman syndrome, because two maternal chromosomes should produce a double dose of the maternal-only PWS-region genes, which the model states is itself pathological",
      "B": "The child develops Prader-Willi syndrome: both copies of the PWS-region genes are maternal and therefore epigenetically silenced (no paternal-expressed copy is present), while UBE3A — expressed from maternal alleles — remains functional from both copies, so Angelman syndrome does not occur",
      "C": "The child develops both Angelman and Prader-Willi syndromes simultaneously, since two maternal copies are assumed to produce both a functional loss and a double-dose gain at the same time",
      "D": "The child develops no imprinting disorder because two functional gene copies are assumed to compensate for the missing paternal chromosome regardless of imprinting status"
    },
    "correct": "B",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nWith maternal UPD15, both copies of chromosome 15 carry the maternal imprint: UBE3A (expressed only from maternal alleles in neurons) is present and functional from both copies, so Angelman syndrome does not occur; but the Prader-Willi-region genes (expressed only from the paternal allele) are silenced on both copies because neither carries the paternal imprint, producing Prader-Willi syndrome.\n\nDistractors:\nA — Confuses which syndrome results from absence of paternal expression; the reasoning about PWS-region genes is on the right track but the conclusion mislabels the outcome as Angelman rather than Prader-Willi.\nC — A double maternal dose of UBE3A does not cause Angelman syndrome, which specifically requires absence, not excess, of maternal UBE3A expression; only Prader-Willi results here.\nD — Genomic imprinting means both copies carry the same silencing pattern regardless of copy number; having two maternal copies cannot substitute for the missing paternally-expressed genes.\n\nDiagnostic focus: Apply parent-of-origin-specific silencing to predict that maternal UPD15 produces Prader-Willi syndrome (absent paternal-expressed genes), not Angelman syndrome.",
    "unit": "Unit 5",
    "big_idea": "IST",
    "sp": "SP 5.E"
  },
  {
    "id": 26,
    "category": "Unit 6: Gene Expression and Regulation — Topic 6.3: Prokaryotic Gene Regulation — The lac Operon",
    "skills": "SP 1.B: Explain a concept, process, model, or mechanism",
    "difficulty": "3 — Analysis",
    "stem": "The diagram shows the lac operon under four combinations of glucose and lactose availability. How do the lac repressor and CAP (catabolite activator protein) act together so that lac genes are transcribed at high levels only when lactose is present AND glucose is absent?",
    "visual": "<svg viewBox='0 0 420 190' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='420' height='190' fill='white'/><rect x='20' y='20' width='90' height='60' fill='#f4d6d6' stroke='#222'/><text x='25' y='35' font-size='9'>+glucose −lactose</text><text x='40' y='60' font-size='11'>OFF</text><rect x='120' y='20' width='90' height='60' fill='#fbe5c6' stroke='#222'/><text x='125' y='35' font-size='9'>+glucose +lactose</text><text x='140' y='60' font-size='11'>low</text><rect x='220' y='20' width='90' height='60' fill='#f4d6d6' stroke='#222'/><text x='225' y='35' font-size='9'>−glucose −lactose</text><text x='240' y='60' font-size='11'>OFF</text><rect x='320' y='20' width='90' height='60' fill='#c8e6c9' stroke='#222'/><text x='325' y='35' font-size='9'>−glucose +lactose</text><text x='335' y='60' font-size='11'>HIGH</text><text x='20' y='105' font-size='11'>Repressor: blocks unless lactose present (allolactose)</text><text x='20' y='125' font-size='11'>CAP-cAMP: activates only when glucose absent</text><text x='20' y='150' font-size='11'>Maximal transcription requires BOTH conditions (AND logic)</text></svg>",
    "options": {
      "A": "Without lactose, the repressor blocks RNA polymerase regardless of glucose; without glucose, cAMP-CAP boosts RNA polymerase binding; because both negative control (lactose-dependent derepression) and positive control (glucose-absence-dependent CAP activation) are required simultaneously, only the −glucose/+lactose condition yields high expression, matching the diagram",
      "B": "The lac repressor and CAP compete for the same DNA site, so whichever protein is present in higher concentration determines whether transcription is high or low, and the diagram's 'HIGH' box simply reflects CAP outcompeting the repressor",
      "C": "CAP is activated specifically by high glucose and directly inactivates the repressor by phosphorylating it, so glucose and lactose together, not glucose absence, produce maximal transcription",
      "D": "The repressor and CAP act redundantly, so either lactose-induced derepression alone or CAP activation alone is sufficient to reach the same high expression level shown in the −glucose/+lactose box"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nNegative control: without lactose, the lac repressor binds the operator and blocks RNA polymerase regardless of glucose status. Positive control: without glucose, cAMP rises, cAMP-CAP binds upstream of the promoter and strongly enhances RNA polymerase binding. Both conditions must be met simultaneously (lactose present to relieve repression AND glucose absent to enable CAP activation) to reach the high-expression state shown only in the −glucose/+lactose panel of the diagram — an AND-gate logic, not redundancy or competition.\n\nDistractors:\nB — The repressor and CAP bind distinct DNA sites (operator vs. CAP site) and do not compete for the same location.\nC — CAP is activated by low glucose (high cAMP), not high glucose, and does not act by phosphorylating the repressor — this reverses CAP's actual glucose dependence.\nD — Overgeneralizes 'either alone is sufficient'; the diagram shows that +glucose/+lactose (repressor released, CAP inactive) gives only low expression, demonstrating both controls are independently necessary, not redundant.\n\nDiagnostic focus: Explain both negative control (repressor/lactose) and positive control (CAP/glucose absence) and how their combined AND logic matches all four conditions in the diagram.",
    "unit": "Unit 6",
    "big_idea": "IST",
    "sp": "SP 1.B"
  },
  {
    "id": 27,
    "category": "Unit 6: Gene Expression and Regulation — Topic 6.5: Post-Transcriptional Regulation — mRNA Processing",
    "skills": "SP 1.A: Describe a concept, process, model, or mechanism",
    "difficulty": "1 — Foundational",
    "stem": "The diagram shows a eukaryotic pre-mRNA with three processing marks added before nuclear export. Which combination of modifications, and their functions, is correct?",
    "visual": "<svg viewBox='0 0 420 150' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='420' height='150' fill='white'/><circle cx='45' cy='60' r='14' fill='#8e44ad'/><text x='30' y='40' font-size='9'>5' cap (m7G)</text><rect x='75' y='50' width='80' height='20' fill='#2980b9'/><text x='80' y='45' font-size='9'>exon 1</text><line x1='155' y1='60' x2='195' y2='60' stroke='#bbb' stroke-width='6'/><text x='157' y='45' font-size='9'>intron (removed)</text><rect x='195' y='50' width='80' height='20' fill='#2980b9'/><text x='200' y='45' font-size='9'>exon 2</text><rect x='300' y='50' width='90' height='20' fill='#e67e22'/><text x='305' y='45' font-size='9'>poly-A tail (~200 A's)</text></svg>",
    "options": {
      "A": "5' capping (7-methylguanosine added in a reverse 5'-5' linkage), 3' polyadenylation (cleavage at the poly-A signal followed by addition of ~200 adenosines), and splicing (spliceosome removal of introns, ligation of exons) — all three are required for stable, translatable, export-competent mRNA",
      "B": "5' methylation of the first exon's adenosine, alternative splicing to generate isoforms, and covalent attachment of a nuclear-export peptide directly onto the RNA",
      "C": "Start-codon editing (AUG to GUG), 3' polyadenylation, and addition of a tRNA-like 3' structure for ribosome recognition",
      "D": "5' capping, 3' polyadenylation, and covalent circularization of the mRNA by ligating the 5' cap directly to the poly-A tail"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nThe three essential eukaryotic pre-mRNA processing events are: (1) 5' capping with 7-methylguanosine in a reverse 5'-5' triphosphate linkage, which protects the 5' end and promotes export and translation initiation; (2) 3' polyadenylation, in which cleavage at the poly-A signal is followed by addition of ~200 adenosines, protecting the 3' end and enhancing translation; and (3) splicing, in which the spliceosome removes introns and ligates exons, producing a continuous open reading frame — all three, shown in the diagram, are required before mature mRNA can be exported and translated.\n\nDistractors:\nB — Alternative splicing is a real regulatory phenomenon but is not itself one of the three universally required processing steps, and nuclear export uses protein export factors/adaptors, not a covalently attached RNA peptide.\nC — Start-codon editing is a rare, gene-specific phenomenon, not a general processing step, and mammalian mRNAs do not carry tRNA-like 3' structures (found instead in some plant viral RNAs).\nD — The 5' cap and poly-A tail interact non-covalently (via eIF4G–PABP bridging) to promote a closed-loop mRNA conformation for translation; they are not covalently ligated into a circle.\n\nDiagnostic focus: Correctly identify all three required pre-mRNA processing steps and their individual functions in producing export- and translation-competent mRNA.",
    "unit": "Unit 6",
    "big_idea": "IST",
    "sp": "SP 1.A"
  },
  {
    "id": 28,
    "category": "Unit 6: Gene Expression and Regulation — Topic 6.6: RNA Interference — miRNA Silencing",
    "skills": "SP 1.B: Explain a concept, process, model, or mechanism",
    "difficulty": "2 — Application",
    "stem": "The flow diagram outlines miRNA biogenesis and gene silencing. Which description of the pathway from pri-miRNA to target mRNA silencing is most accurate?",
    "visual": "<svg viewBox='0 0 420 170' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='420' height='170' fill='white'/><text x='10' y='30' font-size='11'>pri-miRNA</text><text x='95' y='30' font-size='16'>→</text><text x='115' y='30' font-size='11'>Drosha (nucleus)</text><text x='230' y='30' font-size='16'>→</text><text x='250' y='30' font-size='11'>pre-miRNA export</text><text x='10' y='75' font-size='11'>Dicer (cytoplasm)</text><text x='120' y='75' font-size='16'>→</text><text x='140' y='75' font-size='11'>miRNA duplex</text><text x='240' y='75' font-size='16'>→</text><text x='260' y='75' font-size='11'>loaded into RISC</text><text x='10' y='120' font-size='11'>RISC + miRNA binds 3'UTR of target mRNA (imperfect pairing)</text><text x='10' y='145' font-size='11'>→ mRNA deadenylation/degradation and/or blocked translation</text></svg>",
    "options": {
      "A": "Pri-miRNA is processed by nuclear Drosha into a pre-miRNA hairpin, exported by Exportin-5, cleaved by cytoplasmic Dicer into a miRNA duplex, and loaded into RISC; the guide strand base-pairs imperfectly with the 3' UTR of target mRNAs, and RISC promotes mRNA deadenylation/decapping/degradation and/or blocks translation initiation, silencing the target post-transcriptionally",
      "B": "Mature miRNAs exit the nucleus and bind directly to gene promoters on DNA, recruiting histone methyltransferases; miRNA silencing in this scheme is transcriptional rather than post-transcriptional",
      "C": "miRNAs always form perfectly complementary duplexes with their targets, exactly like siRNAs, and always trigger AGO2-mediated slicing rather than translational repression",
      "D": "miRNAs are translated into short 'mirpeptides' that competitively block translation initiation factors; it is the resulting peptide, not the miRNA sequence itself, that silences gene expression"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nPri-miRNA is cleaved in the nucleus by Drosha/DGCR8 into a pre-miRNA hairpin, exported by Exportin-5, and cleaved in the cytoplasm by Dicer into a ~22-bp duplex; the guide strand loads into RISC (Argonaute-containing) and pairs imperfectly, mainly through its 'seed' region, with target 3' UTRs, triggering deadenylation/decapping/exonucleolytic degradation and/or translational repression — post-transcriptional silencing, matching the diagram's flow.\n\nDistractors:\nB — Canonical animal miRNA silencing occurs post-transcriptionally in the cytoplasm via mRNA targeting, not by miRNAs binding DNA promoters directly (a distinct, non-canonical mechanism in some organisms).\nC — Confuses miRNA with siRNA: siRNAs typically have near-perfect complementarity and trigger obligatory AGO2 slicing, while animal miRNAs typically have imperfect complementarity and act mainly by translational repression and/or deadenylation-linked decay.\nD — miRNAs function as non-coding regulatory RNAs; they are not translated into peptides that silence expression.\n\nDiagnostic focus: Trace miRNA biogenesis (Drosha→Dicer→RISC) and correctly describe post-transcriptional, imperfect-pairing-based silencing, distinguishing it from siRNA mechanisms.",
    "unit": "Unit 6",
    "big_idea": "IST",
    "sp": "SP 1.B"
  },
  {
    "id": 29,
    "category": "Unit 6: Gene Expression and Regulation — Topic 6.2: Eukaryotic Transcription Initiation",
    "skills": "SP 1.A: Describe a concept, process, model, or mechanism",
    "difficulty": "2 — Application",
    "stem": "RNA Polymerase II cannot bind eukaryotic promoters directly and requires assembly of general transcription factors (GTFs) at the TATA box. Which step in pre-initiation complex assembly most directly positions RNA Pol II over the transcription start site?",
    "options": {
      "A": "TFIID (via its TBP subunit) binds the TATA box and bends the DNA, establishing a positional reference point; TFIIB then binds both TFIID-bound DNA and RNA Pol II, bridging the two and positioning Pol II's active site over the transcription start site, after which TFIIF, TFIIE, and TFIIH complete the complex",
      "B": "RNA Pol II binds the TATA box directly through its own clamp domain, and TFIID arrives only afterward as a general enhancer that stabilizes an already-positioned polymerase",
      "C": "Enhancer-bound activator proteins recruit RNA Pol II directly to the promoter without requiring any general transcription factors, which the model claims are needed only for constitutive housekeeping genes",
      "D": "The Mediator complex alone positions RNA Pol II at the transcription start site, and TFIID, TFIIB, and the other GTFs function as inhibitory factors that must be displaced before transcription can begin"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nTBP (within TFIID) binds and bends the TATA box, establishing a fixed reference point; TFIIB then contacts both TFIID-bound DNA and RNA Pol II directly, positioning the polymerase's catalytic cleft over the transcription start site — the key bridging step — before TFIIF, TFIIE, and TFIIH complete pre-initiation complex assembly and promoter melting.\n\nDistractors:\nB — RNA Pol II lacks a TBP-like DNA-binding domain and cannot bind the TATA box directly; TFIID must bind first to create the platform Pol II is recruited to.\nC — Enhancer-bound activators do recruit Pol II via Mediator and coactivators during activated transcription, but GTFs are required for all Pol II transcription, not only constitutive genes — this overgeneralizes GTF necessity.\nD — Mediator bridges activators to the pre-initiation complex but does not position Pol II independently of GTFs; GTFs are essential positive assembly factors, not inhibitors to be displaced.\n\nDiagnostic focus: Identify TFIIB as the molecular bridge that positions RNA Pol II at the transcription start site after TFIID establishes the TATA-box reference point.",
    "unit": "Unit 6",
    "big_idea": "IST",
    "sp": "SP 1.A"
  },
  {
    "id": 30,
    "category": "Unit 6: Gene Expression and Regulation — Topic 6.7: CRISPR Gene Editing — Casgevy and Sickle Cell Disease",
    "skills": "SP 1.B: Explain a concept, process, model, or mechanism",
    "difficulty": "2 — Application",
    "stem": "Casgevy, a CRISPR-Cas9 therapy approved to treat sickle cell disease, uses a 20-nucleotide single-guide RNA (sgRNA) to direct Cas9 to a specific site in a patient's genome. Which explanation best accounts for how a 20-nt sgRNA achieves sufficient specificity to find one unique site in a ~6×10^9 bp diploid human genome?",
    "visual": "<svg viewBox='0 0 400 170' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='170' fill='white'/><line x1='30' y1='90' x2='370' y2='90' stroke='#222' stroke-width='2'/><rect x='150' y='60' width='120' height='16' fill='#2980b9'/><text x='150' y='50' font-size='10'>20-nt sgRNA:DNA base pairing</text><rect x='270' y='60' width='30' height='16' fill='#c0392b'/><text x='268' y='50' font-size='10'>PAM (NGG)</text><text x='40' y='115' font-size='11'>4^20 ≈ 10^12 possible 20-mers  >>  6×10^9 bp genome</text><text x='40' y='140' font-size='11'>PAM requirement adds a second specificity filter</text></svg>",
    "options": {
      "A": "The sgRNA base-pairs with target DNA by Watson-Crick complementarity; a 20-mer has 4^20 ≈ 10^12 possible sequences, far exceeding the ~6×10^9 bp genome, and Cas9 additionally requires an adjacent PAM sequence (5'-NGG-3' for SpCas9), giving a two-step specificity filter (sgRNA pairing plus PAM recognition) before the HNH and RuvC domains cleave both DNA strands",
      "B": "The sgRNA does not itself provide specificity; Cas9 protein first scans every AT-rich genomic region for possible targets, and the sgRNA only serves afterward to confirm a binding event it did not help select",
      "C": "Only the first 7 nucleotides of the sgRNA ('seed sequence') contribute to specificity, while the remaining 13 nucleotides are described as universal scaffold sequence that never contacts genomic DNA",
      "D": "Cas9 cleaves at every genomic NGG PAM site (occurring roughly every 8 bp on average), and the sgRNA functions only to block Cas9 from cutting most of these sites rather than to determine which site is cut"
    },
    "correct": "A",
    "explanation": "Big Idea: IST — Information Storage and Transmission\n\nCas9 first scans DNA for PAM sequences (5'-NGG-3'); at each PAM, it locally unwinds the DNA and lets the sgRNA test 20 nt of complementarity, forming a stable R-loop only if pairing is extensive (especially in the PAM-proximal 'seed' region). A fully paired 20-nt sgRNA has 4^20 ≈ 10^12 possible sequences, comfortably exceeding the ~6×10^9 bp genome, so combined with the PAM requirement, this two-step filter statistically predicts a unique target site — the basis for Casgevy's precise editing of the BCL11A enhancer in patients' hematopoietic stem cells.\n\nDistractors:\nB — Cas9 does not preferentially scan AT-rich regions; it searches for PAMs regardless of local base composition, and the sgRNA is the primary specificity determinant, not a passive confirmation step.\nC — The full 20-nt spacer contributes to specificity, with PAM-proximal seed mismatches being especially disruptive; claiming the distal 13 nt 'never contacts' DNA overstates the seed-region finding into an absolute.\nD — Reverses roles: the PAM is a necessary but not sufficient filter, and the sgRNA is the primary determinant of which of the many PAM-adjacent sites is actually targeted, not merely a blocker of unwanted cuts.\n\nDiagnostic focus: Explain how sgRNA sequence complexity (4^20) combined with PAM recognition provides sufficient combined specificity to target a unique genomic locus.",
    "unit": "Unit 6",
    "big_idea": "IST",
    "sp": "SP 1.B"
  },
  {
    "id": 31,
    "category": "Unit 7: Natural Selection — Topic 7.2: Mechanisms of Natural Selection — Antibiotic Resistance",
    "skills": "SP 1.A: Describe a concept, process, model, or mechanism",
    "difficulty": "1 — Foundational",
    "stem": "The graph shows bacterial population size before and after antibiotic exposure: total population crashes, then a small resistant subpopulation (present before treatment, per public health surveillance of rising antibiotic-resistant infections) regrows. Which sequence correctly describes the Darwinian mechanism producing this pattern?",
    "visual": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='200' fill='white'/><line x1='50' y1='20' x2='50' y2='170' stroke='#222'/><line x1='50' y1='170' x2='370' y2='170' stroke='#222'/><polyline points='50,40 150,40' fill='none' stroke='#2980b9' stroke-width='2.5'/><line x1='150' y1='20' x2='150' y2='170' stroke='#c0392b' stroke-dasharray='4'/><text x='155' y='35' font-size='10' fill='#c0392b'>antibiotic added</text><polyline points='150,40 190,150' fill='none' stroke='#2980b9' stroke-width='2.5'/><polyline points='190,150 260,145 370,90' fill='none' stroke='#27ae60' stroke-width='2.5'/><text x='260' y='80' font-size='10' fill='#27ae60'>resistant subpopulation regrows</text><text x='150' y='190' font-size='12'>Time</text><text x='5' y='100' font-size='12' transform='rotate(-90 5,100)'>Bacterial population</text></svg>",
    "options": {
      "A": "Antibiotic treatment causes bacteria to deliberately mutate their target genes in direct response to drug exposure, and this induced, adaptive mutation is what produces the resistant regrowth phase shown after the crash",
      "B": "Pre-existing random mutations already present in a small fraction of cells confer resistance before any drug exposure; the antibiotic applies strong selection, killing sensitive cells (the crash) while resistant cells survive and reproduce (the regrowth), increasing the resistant allele's frequency; the drug selects pre-existing variation rather than causing it",
      "C": "Exposure to the antibiotic triggers horizontal gene transfer that synthesizes entirely new resistance genes de novo from the drug's own molecular structure, which are then distributed to all surviving cells",
      "D": "All cells in the population simultaneously acquire resistance through gradual, heritable epigenetic reprogramming that becomes a fixed DNA sequence change only after many generations of continuous exposure"
    },
    "correct": "B",
    "explanation": "Big Idea: EVO — Evolution\n\nNatural selection requires pre-existing heritable variation: rare resistance mutations (or resistance plasmids) exist in the population before drug exposure. The antibiotic does not cause these mutations; it selects for them — sensitive cells die (the population crash), while resistant cells survive and reproduce, so the resistant subpopulation's share of the population rises over time (the regrowth phase in the graph), consistent with real global antibiotic-resistance surveillance data.\n\nDistractors:\nA — Directed, drug-induced mutation of target genes is a Lamarckian mechanism; bacteria do not mutate specific genes 'in response to' the antibiotic, though general stress can nonspecifically raise overall mutation rates.\nC — Resistance genes are not synthesized de novo from a drug's structure; they typically already exist in bacterial populations (often on transferable plasmids) independent of any particular drug exposure event.\nD — Population-wide simultaneous epigenetic-to-genetic conversion is not the observed mechanism; resistance spreads by differential survival and reproduction of a pre-existing resistant minority, not simultaneous acquisition by all cells.\n\nDiagnostic focus: Distinguish Darwinian selection of pre-existing variation from Lamarckian directed-mutation misconceptions in a real antibiotic-resistance scenario.",
    "unit": "Unit 7",
    "big_idea": "EVO",
    "sp": "SP 1.A"
  },
  {
    "id": 32,
    "category": "Unit 7: Natural Selection — Topic 7.4: Population Genetics — Hardy-Weinberg Equilibrium",
    "skills": "SP 6.A: Apply a formula or equation to quantify a biological situation",
    "difficulty": "2 — Application",
    "stem": "The bar chart shows genotype counts in a population of 2,500 individuals at Hardy-Weinberg equilibrium, where 25 individuals show the recessive homozygous (aa) phenotype. Which set of allele and genotype frequencies is consistent with the chart?",
    "visual": "<svg viewBox='0 0 380 220' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='380' height='220' fill='white'/><line x1='50' y1='20' x2='50' y2='190' stroke='#222'/><line x1='50' y1='190' x2='350' y2='190' stroke='#222'/><rect x='80' y='40' width='60' height='150' fill='#2980b9'/><text x='75' y='205' font-size='10'>AA = 2025</text><rect x='170' y='150' width='60' height='40' fill='#27ae60'/><text x='170' y='205' font-size='10'>Aa = 450</text><rect x='260' y='185' width='60' height='5' fill='#c0392b'/><text x='262' y='205' font-size='10'>aa = 25</text><text x='5' y='115' font-size='11' transform='rotate(-90 5,115)'>Individuals</text></svg>",
    "options": {
      "A": "q² = 25/2,500 = 0.01, so q = 0.10 and p = 0.90; AA = p² = 0.81 (2,025 individuals), Aa = 2pq = 0.18 (450 individuals), aa = q² = 0.01 (25 individuals), matching the chart",
      "B": "q = 25/2,500 = 0.01 directly, treating the frequency of aa individuals as equal to the allele frequency, giving p = 0.99 and AA = 0.9801",
      "C": "q² = 25/2,500 = 0.01 and q = 0.1, but the 450 heterozygotes shown in the chart are said to be inconsistent with Hardy-Weinberg because the carrier:affected ratio of 18:1 is claimed to be impossible at this allele frequency",
      "D": "Allele frequencies cannot be determined from this chart because Hardy-Weinberg requires directly counting heterozygote genotypes by molecular testing rather than inferring them from the recessive phenotype count"
    },
    "correct": "A",
    "explanation": "Big Idea: EVO — Evolution\n\nq² = 25/2,500 = 0.01, so q = √0.01 = 0.10 and p = 1 − 0.10 = 0.90. Genotype frequencies: AA = p² = 0.81 (2,025 individuals), Aa = 2pq = 0.18 (450 individuals), aa = q² = 0.01 (25 individuals); these sum to 2,500, matching the bar chart exactly.\n\nDistractors:\nB — Confuses q² (the genotype frequency of aa individuals, 0.01) with q itself (the allele frequency, 0.10) — a very common calculation error that skips the square-root step.\nC — Uses the correct numbers (q = 0.1, 450 heterozygotes) but mischaracterizes the resulting 18:1 carrier:affected ratio as a contradiction, when it is in fact the expected and correct Hardy-Weinberg outcome at this allele frequency.\nD — Overstates the data requirement; Hardy-Weinberg equilibrium allows all genotype frequencies to be calculated from just one observed genotype frequency (here, aa), without needing direct heterozygote genotyping.\n\nDiagnostic focus: Correctly take the square root of the observed recessive-phenotype frequency to obtain q, then compute p, 2pq, and p² accurately.",
    "unit": "Unit 7",
    "big_idea": "EVO",
    "sp": "SP 6.A"
  },
  {
    "id": 33,
    "category": "Unit 7: Natural Selection — Topic 7.5: Evidence for Evolution — Evaluating a De-Extinction Claim",
    "skills": "SP 5.B: Justify a scientific claim using evidence",
    "difficulty": "3 — Analysis",
    "stem": "In 2025, a biotechnology company edited gray wolf genomes at roughly 20 genetic loci associated with traits of the extinct dire wolf (based on ancient DNA comparisons) and announced the resulting pups as 'de-extinct dire wolves.' The phylogenetic tree shows dire wolves as a lineage that diverged from the ancestor of gray wolves and jackals roughly 5–6 million years ago. Which evaluation of the de-extinction claim is most scientifically appropriate?",
    "visual": "<svg viewBox='0 0 400 190' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='190' fill='white'/><line x1='40' y1='150' x2='150' y2='150' stroke='#222' stroke-width='2'/><line x1='150' y1='150' x2='150' y2='50' stroke='#222' stroke-width='2'/><line x1='150' y1='50' x2='320' y2='50' stroke='#222' stroke-width='2'/><line x1='150' y1='150' x2='320' y2='150' stroke='#222' stroke-width='2'/><line x1='150' y1='90' x2='320' y2='90' stroke='#222' stroke-width='2'/><line x1='150' y1='50' x2='150' y2='90' stroke='#222' stroke-width='2'/><text x='325' y='54' font-size='11'>dire wolf (extinct)</text><text x='325' y='94' font-size='11'>gray wolf</text><text x='325' y='154' font-size='11'>jackal</text><text x='30' y='170' font-size='10'>~5–6 million years divergence</text></svg>",
    "options": {
      "A": "The claim is fully supported: editing ~20 gray-wolf loci to match dire-wolf DNA sequence data is sufficient by itself to reconstitute a dire wolf, since any organism carrying dire-wolf-associated alleles at known loci is genetically equivalent to a true dire wolf",
      "B": "The claim is overstated: gray wolves and dire wolves diverged roughly 5–6 million years ago and differ across the genome at many more than 20 loci; editing a limited number of trait-associated loci in a gray wolf genome can approximate select dire-wolf phenotypes but does not restore the full ancestral genome, so the resulting animals are more accurately described as genetically modified gray wolves with some dire-wolf-like traits, not a resurrected dire wolf population",
      "C": "The claim is unfounded because comparative ancient-DNA analysis can never provide any information about extinct species' traits, so no phenotype claims can be evaluated from such data at all",
      "D": "The claim would only be valid if every one of the roughly 20 edited loci is located in a protein-coding exon, since noncoding regulatory variation is assumed to have no effect on the traits used to define the species"
    },
    "correct": "B",
    "explanation": "Big Idea: EVO — Evolution\n\nThe phylogenetic tree shows dire wolves and gray wolves sharing a common ancestor millions of years ago, meaning their genomes differ at a vast number of positions accumulated independently since divergence. Editing a limited set of trait-associated loci in a living gray wolf genome can recreate specific dire-wolf-like phenotypes (e.g., coat color, size traits) without reconstituting the full ancestral genome, its full developmental context, or its ecological lineage — a genetically modified gray wolf is not genetically equivalent to a resurrected dire wolf population.\n\nDistractors:\nA — Overstates what a small number of edited trait loci can accomplish; matching a handful of loci does not equate to genome-wide equivalence with an extinct lineage that diverged millions of years ago.\nC — Overgeneralizes the limits of ancient DNA analysis; comparative genomics from preserved specimens has legitimately informed traits, diet, and relationships of many extinct species, even though it cannot capture every aspect of a living organism.\nD — Introduces an unsupported requirement; regulatory (noncoding) variation is well documented to affect phenotype, so restricting valid edits to coding exons is not scientifically justified.\n\nDiagnostic focus: Evaluate a genomic-editing claim against phylogenetic divergence data, distinguishing trait-level phenotypic engineering from full genomic/species restoration.",
    "unit": "Unit 7",
    "big_idea": "EVO",
    "sp": "SP 5.B"
  },
  {
    "id": 34,
    "category": "Unit 7: Natural Selection — Topic 7.7: Speciation and Reproductive Isolation",
    "skills": "SP 5.E: Predict outcomes of a proposed biological scenario",
    "difficulty": "2 — Application",
    "stem": "A landslide splits a lake into two separate lakes, isolating a fish population for thousands of generations under different environmental conditions, causing substantial allele-frequency divergence. Which prediction and confirmatory test is most scientifically rigorous?",
    "options": {
      "A": "The populations will inevitably become separate species within 100 generations, because geographic isolation is assumed to always produce reproductive isolation on a fixed timeline, so no further test is needed",
      "B": "The populations may or may not have evolved reproductive isolation; genetic divergence alone does not confirm speciation, so the biological species concept requires directly testing reproductive compatibility — mating trials or mate-choice observations assessing prezygotic (behavioral, mechanical, temporal) and postzygotic (hybrid inviability or sterility) isolation between individuals from each population",
      "C": "Geographic isolation by itself is assumed to guarantee speciation, since physical separation is treated as automatically equivalent to biological species status with no additional test required",
      "D": "If the barrier were removed, gene flow would be expected to restore both populations' allele frequencies to their original shared values within a few generations, since Hardy-Weinberg equilibrium is assumed to reconstitute the ancestral state"
    },
    "correct": "B",
    "explanation": "Big Idea: EVO — Evolution\n\nGeographic isolation removes gene flow and allows independent divergence via drift and differential selection, but it is necessary, not sufficient, for speciation. Confirming that the populations are now separate biological species requires directly testing reproductive isolation — whether individuals from each population interbreed successfully and produce viable, fertile offspring — through controlled mating trials or behavioral mate-choice observations, assessing both prezygotic and postzygotic isolating mechanisms.\n\nDistractors:\nA — There is no fixed generation count for speciation; divergence timelines vary enormously (from a single generation via polyploidy to many millions of years), so asserting a universal 100-generation rule is an unsupported overgeneralization.\nC — Overgeneralizes geographic isolation as automatically equivalent to speciation; many geographically isolated populations remain fully interfertile if reunited, so physical separation alone does not confirm species status.\nD — Once allele frequencies have diverged independently in each population, mixing them upon barrier removal would produce intermediate frequencies, not a reversion to the original shared ancestral frequencies; this misapplies Hardy-Weinberg (which describes stability within one population, not convergence between two diverged ones).\n\nDiagnostic focus: Apply the biological species concept correctly, recognizing that geographic isolation is necessary but not sufficient, and that reproductive isolation must be directly tested.",
    "unit": "Unit 7",
    "big_idea": "EVO",
    "sp": "SP 5.E"
  },
  {
    "id": 35,
    "category": "Unit 7: Natural Selection — Topic 7.1: Evidence for Evolution — Molecular Homology",
    "skills": "SP 4.B: Explain relationships in data or a model",
    "difficulty": "1 — Foundational",
    "stem": "The bar chart shows the number of amino acid differences in cytochrome c between humans and three other species: 0 differences from chimpanzee, 12 from horse, and 45 from yeast. What does this pattern indicate about evolutionary relationships, assuming an approximately constant rate of neutral substitution?",
    "visual": "<svg viewBox='0 0 380 210' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='380' height='210' fill='white'/><line x1='50' y1='20' x2='50' y2='180' stroke='#222'/><line x1='50' y1='180' x2='350' y2='180' stroke='#222'/><rect x='80' y='178' width='60' height='2' fill='#2980b9'/><text x='75' y='195' font-size='10'>Chimp: 0</text><rect x='170' y='140' width='60' height='40' fill='#27ae60'/><text x='170' y='195' font-size='10'>Horse: 12</text><rect x='260' y='40' width='60' height='140' fill='#c0392b'/><text x='260' y='195' font-size='10'>Yeast: 45</text><text x='5' y='110' font-size='11' transform='rotate(-90 5,110)'>Amino acid differences</text></svg>",
    "options": {
      "A": "The greater the number of cytochrome c differences from humans, the more distant the evolutionary relationship: chimpanzees share the most recent common ancestor with humans, horses a more distant one, and yeast the most ancient common ancestor, consistent with molecular-clock reasoning applied to this functionally constrained protein",
      "B": "Zero differences between human and chimpanzee cytochrome c means the chimpanzee lineage has undergone no evolutionary change at all since the human-chimp split, while the horse lineage alone has continued to evolve",
      "C": "Because cytochrome c is highly functionally constrained, the data are said to provide no valid information about evolutionary relationships, and only non-functional pseudogene sequences could be used for this purpose",
      "D": "The pattern indicates a linear sequence of descent, with yeast evolving into horses (adding 12 differences) and horses subsequently evolving into humans (adding 33 more differences) to reach the total of 45"
    },
    "correct": "A",
    "explanation": "Big Idea: EVO — Evolution\n\nCytochrome c is under strong functional constraint, so most substitutions are deleterious and rare; the substitutions that do persist accumulate roughly with time since common ancestry (molecular clock). Fewer differences (chimpanzee: 0) indicate a more recent common ancestor, while more differences (yeast: 45) indicate a far more ancient common ancestor — matching independently established phylogenies from fossils and other molecular markers.\n\nDistractors:\nB — Zero cytochrome c differences does not mean the chimpanzee lineage 'stopped evolving'; it means this particular, highly constrained protein happened to remain unchanged in the specific residues compared, while many other loci differ substantially between humans and chimpanzees.\nC — Overstates the limitation of functionally constrained sequences; their conservation is exactly what makes homology assignment reliable, and the residual variable sites still carry phylogenetic signal — cytochrome c is a classic, valid molecular phylogenetic marker.\nD — Misinterprets divergence as a linear chain of one species evolving into the next; species share common ancestors and diverge from them independently, they do not evolve sequentially from one another.\n\nDiagnostic focus: Interpret amino acid sequence differences as a proxy for time since common ancestry, without concluding that greater similarity means 'no evolution' or that divergence implies linear descent.",
    "unit": "Unit 7",
    "big_idea": "EVO",
    "sp": "SP 4.B"
  },
  {
    "id": 36,
    "category": "Unit 8: Ecology — Topic 8.3: Population Ecology — Logistic Growth",
    "skills": "SP 6.A: Apply a formula or equation to quantify a biological situation",
    "difficulty": "2 — Application",
    "stem": "The graph shows a deer population growing logistically toward K = 800 with current N = 200 and intrinsic growth rate r = 0.4/yr (dN/dt = rN[(K−N)/K]). What is the current growth rate, and at what population size is growth rate maximized?",
    "visual": "<svg viewBox='0 0 400 210' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='210' fill='white'/><line x1='50' y1='20' x2='50' y2='180' stroke='#222'/><line x1='50' y1='180' x2='370' y2='180' stroke='#222'/><path d='M50,175 C120,150 190,60 260,45 C320,38 350,35 370,32' fill='none' stroke='#27ae60' stroke-width='2.5'/><line x1='120' y1='20' x2='120' y2='180' stroke='#bbb' stroke-dasharray='4'/><text x='75' y='195' font-size='10'>N=200 (now)</text><line x1='210' y1='20' x2='210' y2='180' stroke='#bbb' stroke-dasharray='4'/><text x='170' y='200' font-size='10'>N=K/2=400 (steepest)</text><text x='140' y='15' font-size='10'>K=800 (asymptote)</text></svg>",
    "options": {
      "A": "dN/dt = 0.4 × 200 × (800−200)/800 = 80 × 0.75 = 60 deer/yr; maximum growth rate occurs at N = K/2 = 400 deer, the point of steepest slope on the curve",
      "B": "dN/dt = 0.4 × 200 = 80 deer/yr, treating logistic growth as equivalent to exponential growth since N is less than K, with maximum growth rate assumed to occur at N = 0",
      "C": "dN/dt = 0.4 × 800 × (800−200)/800 = 320 × 0.75 = 240 deer/yr, substituting K in place of N in the rN term of the equation",
      "D": "dN/dt = rK/4 = 0.4 × 800/4 = 80 deer/yr, treating the maximum possible growth rate as if it were also necessarily the current growth rate at N = 200"
    },
    "correct": "A",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\ndN/dt = rN[(K−N)/K] = 0.4 × 200 × (600/800) = 80 × 0.75 = 60 deer/yr. Because dN/dt is a quadratic function of N, it is maximized at N = K/2 = 400, where dN/dt = r(K/2)[(K/2)/K] = rK/4 = 80 deer/yr — the steepest part of the S-shaped curve. At N = 200 (below K/2), growth rate is still rising toward that maximum.\n\nDistractors:\nB — Ignoring the logistic correction term is only valid when N << K; here N/K = 0.25 is large enough that (1−N/K) = 0.75 meaningfully reduces growth below the exponential estimate, and the maximum growth rate occurs at N=K/2, not N=0.\nC — Substitutes K instead of the actual population N into the rN term, overestimating the current growth rate.\nD — Correctly computes the maximum possible growth rate (rK/4 = 80) but incorrectly presents it as equal to the current growth rate at N = 200, rather than as the value only reached at N = K/2.\n\nDiagnostic focus: Correctly substitute N (not K) into the logistic equation for current growth rate, and separately identify N = K/2 as the population size of maximum growth rate.",
    "unit": "Unit 8",
    "big_idea": "SYI",
    "sp": "SP 6.A"
  },
  {
    "id": 37,
    "category": "Unit 8: Ecology — Topic 8.5: Community Ecology — Trophic Cascades",
    "skills": "SP 4.B: Explain relationships in data or a model",
    "difficulty": "3 — Analysis",
    "stem": "The graph shows Yellowstone elk population and willow/aspen canopy cover from 1990–2020, spanning wolf reintroduction in 1995. Elk numbers decline and willow cover rises after 1995, and long-term monitoring also shows elk shifting away from open streamside areas even where direct wolf kills are rare. Which concept best explains this full pattern of change?",
    "visual": "<svg viewBox='0 0 400 210' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='210' fill='white'/><line x1='50' y1='20' x2='50' y2='180' stroke='#222'/><line x1='50' y1='180' x2='370' y2='180' stroke='#222'/><line x1='140' y1='20' x2='140' y2='180' stroke='#bbb' stroke-dasharray='4'/><text x='90' y='15' font-size='10'>wolves reintroduced 1995</text><polyline points='50,60 140,60 220,110 370,150' fill='none' stroke='#c0392b' stroke-width='2.5'/><text x='260' y='140' font-size='10' fill='#c0392b'>elk population</text><polyline points='50,160 140,160 220,120 370,60' fill='none' stroke='#27ae60' stroke-width='2.5'/><text x='260' y='55' font-size='10' fill='#27ae60'>willow/aspen cover</text><text x='150' y='200' font-size='12'>Year</text></svg>",
    "options": {
      "A": "Competitive release: wolves are said to compete directly with elk for plant food, so wolf presence reduces elk access to vegetation and the changes reflect direct competition rather than predation",
      "B": "Trophic cascade including a landscape-of-fear effect: wolf predation reduced elk numbers, and predation risk also altered elk foraging behavior (avoidance of exposed streamside areas even without direct kills), relieving browsing pressure on willows and aspens, which recovered as shown, illustrating that behavioral responses to risk can drive ecological change alongside direct mortality",
      "C": "Bottom-up control: rising plant productivity from a coincidental wetter climate is treated as the sole driver, with wolf reintroduction assumed to be an unrelated coincidence in timing",
      "D": "Character displacement: elk are assumed to have evolved smaller body size and reduced browsing efficiency within 20 years specifically in response to wolf predation pressure, and this rapid evolutionary change is what reduced browsing on riparian vegetation"
    },
    "correct": "B",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nThe pattern reflects a top-down trophic cascade: wolves reduce elk numbers directly through predation, and also alter elk spatial behavior through the 'landscape of fear' — elk avoid vulnerable open streamside habitat even in areas with few actual kills — reducing browsing pressure on willows and aspens, allowing riparian vegetation to recover, as shown by the diverging elk and vegetation curves after 1995.\n\nDistractors:\nA — Wolves are carnivores and do not compete with elk for plant resources; this misapplies a competitive mechanism to a predator-prey relationship.\nC — The strong temporal coincidence with wolf reintroduction (not a documented shift to wetter climate at that time) supports a top-down explanation; treating climate as the sole driver ignores the behavioral and demographic elk data.\nD — Twenty years is far too short for significant heritable body-size evolution to explain the observed vegetation recovery; the elk behavioral shifts documented are rapid, non-evolutionary responses to perceived predation risk.\n\nDiagnostic focus: Apply the trophic cascade concept, including both direct predation and risk-driven behavioral change, to explain a real multi-level ecological dataset.",
    "unit": "Unit 8",
    "big_idea": "SYI",
    "sp": "SP 4.B"
  },
  {
    "id": 38,
    "category": "Unit 8: Ecology — Topic 8.6: Energy Flow — Ecological Efficiency",
    "skills": "SP 6.A: Apply a formula or equation to quantify a biological situation",
    "difficulty": "2 — Application",
    "stem": "The energy pyramid shows net primary productivity of 8,000 kcal/m²/yr, with 10% ecological efficiency at each trophic transfer. How much energy is available to tertiary consumers (animals that eat secondary consumers)?",
    "visual": "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='340' height='220' fill='white'/><polygon points='40,200 300,200 260,155 80,155' fill='#27ae60'/><text x='120' y='182' font-size='10' fill='white'>Producers 8,000</text><polygon points='80,155 260,155 230,115 110,115' fill='#2980b9'/><text x='140' y='140' font-size='10' fill='white'>Primary 800</text><polygon points='110,115 230,115 205,75 135,75' fill='#e67e22'/><text x='150' y='100' font-size='10' fill='white'>Secondary 80</text><polygon points='135,75 205,75 190,40 150,40' fill='#c0392b'/><text x='152' y='62' font-size='9' fill='white'>Tertiary ?</text></svg>",
    "options": {
      "A": "8 kcal/m²/yr, applying (0.10)^3 across three trophic transfers: 8,000 → 800 → 80 → 8",
      "B": "80 kcal/m²/yr, applying 10% only twice (8,000 × 0.01), which is the energy level of secondary consumers, one transfer short of tertiary",
      "C": "800 kcal/m²/yr, applying 10% only once, which is the energy level of primary consumers, two transfers short of tertiary",
      "D": "0.8 kcal/m²/yr, applying (0.10)^4, one transfer beyond tertiary consumers (i.e., the quaternary-consumer level)"
    },
    "correct": "A",
    "explanation": "Big Idea: ENE — Energetics\n\nThree trophic transfers separate producers from tertiary consumers (producer→primary→secondary→tertiary), so energy available = 8,000 × (0.10)³ = 8,000 × 0.001 = 8 kcal/m²/yr, matching the top of the pyramid. This ~99.9% cumulative loss illustrates why food chains rarely exceed four or five trophic levels and why diets closer to producers support more biomass per unit of primary production.\n\nDistractors:\nB — Stops one transfer short, giving the secondary-consumer energy level (80 kcal/m²/yr) rather than tertiary.\nC — Stops two transfers short, giving the primary-consumer energy level (800 kcal/m²/yr) rather than tertiary.\nD — Applies one transfer too many, computing the quaternary-consumer level rather than tertiary.\n\nDiagnostic focus: Correctly count exactly three trophic transfers from producers to tertiary consumers and apply (0.10)³.",
    "unit": "Unit 8",
    "big_idea": "ENE",
    "sp": "SP 6.A"
  },
  {
    "id": 39,
    "category": "Unit 8: Ecology — Topic 8.2: Nutrient Cycling — Eutrophication",
    "skills": "SP 1.B: Explain a concept, process, model, or mechanism",
    "difficulty": "3 — Analysis",
    "stem": "The graph shows dissolved oxygen (DO) concentration along a river, from upstream of an agricultural nitrogen-fertilizer runoff source to downstream, with a pronounced DO dip several kilometers below the input. Which cascade of events best explains this pattern?",
    "visual": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='200' fill='white'/><line x1='50' y1='20' x2='50' y2='170' stroke='#222'/><line x1='50' y1='170' x2='370' y2='170' stroke='#222'/><polyline points='50,50 130,50 190,140 260,150 370,70' fill='none' stroke='#2980b9' stroke-width='2.5'/><line x1='130' y1='20' x2='130' y2='170' stroke='#c0392b' stroke-dasharray='4'/><text x='135' y='35' font-size='10' fill='#c0392b'>fertilizer runoff input</text><text x='150' y='190' font-size='12'>Distance downstream (km)</text><text x='5' y='100' font-size='12' transform='rotate(-90 5,100)'>Dissolved O2 (mg/L)</text></svg>",
    "options": {
      "A": "Excess nitrate/ammonium runoff triggers an algal bloom → surface algae block light, killing submerged vegetation → dead algal and plant biomass is decomposed by aerobic bacteria, consuming dissolved O2 faster than it is replenished → a hypoxic zone forms downstream, matching the DO dip, before O2 gradually recovers further downstream as organic matter is depleted",
      "B": "Excess nitrogen is completely removed by denitrifying bacteria within hours of entering the river, so the DO dip must be explained by an unrelated, coincidental factor rather than nutrient input",
      "C": "Excess nitrogen causes river pH to drop below 4.0, and the DO dip is attributed entirely to acid-sensitive fish behavior changes rather than to any biological oxygen demand from decomposition",
      "D": "Excess nitrogen mainly fertilizes streamside trees, whose increased shading is said to lower water temperature enough by itself to fully explain the localized DO dip observed downstream"
    },
    "correct": "A",
    "explanation": "Big Idea: SYI — Systems and System Interactions\n\nNutrient-enriched runoff stimulates algal/cyanobacterial blooms that shade out submerged vegetation; the resulting dead organic matter fuels aerobic bacterial decomposition, whose biological oxygen demand draws down dissolved O2 faster than reaeration can replace it, producing a hypoxic zone downstream of the input before gradual recovery as organic matter is degraded and diluted — matching the graph's DO dip and partial recovery.\n\nDistractors:\nB — Natural denitrification capacity is finite and is often overwhelmed by the scale of agricultural nitrogen inputs; it does not remove excess N within hours, and it does not explain the DO dip's timing and shape.\nC — Nitrate/ammonium runoff does not typically drive river pH to 4.0; the DO dip is driven by decomposition-linked oxygen demand, not by acid-induced fish behavior alone.\nD — While riparian shading can occur with nutrient enrichment, it is not the primary or sufficient explanation for a sharp, localized DO dip tied closely to the runoff input point, as shown in the graph.\n\nDiagnostic focus: Trace the eutrophication cascade (nutrient input → algal bloom → light blockage/vegetation loss → decomposition → oxygen depletion) and connect it to the shape of a real dissolved-oxygen profile.",
    "unit": "Unit 8",
    "big_idea": "SYI",
    "sp": "SP 1.B"
  },
  {
    "id": 40,
    "category": "Unit 8: Ecology — Topic 8.7: Human Impacts on Ecosystems — Conservation Strategy",
    "skills": "SP 5.B: Justify a scientific claim using evidence",
    "difficulty": "3 — Analysis",
    "stem": "The IUCN Red List cites habitat loss as the primary driver for more than 80% of threatened-species listings. A government proposes a single 800,000-hectare protected area as its main biodiversity strategy, compared to an alternative network of several smaller, connected reserves totaling the same area (diagrammed below). Which evaluation of the single-large-reserve proposal is most scientifically accurate?",
    "visual": "<svg viewBox='0 0 400 180' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect width='400' height='180' fill='white'/><circle cx='100' cy='90' r='60' fill='none' stroke='#2980b9' stroke-width='3'/><text x='55' y='95' font-size='11'>single 800,000 ha</text><text x='60' y='160' font-size='10'>isolated population</text><circle cx='260' cy='60' r='30' fill='none' stroke='#27ae60' stroke-width='3'/><circle cx='330' cy='90' r='28' fill='none' stroke='#27ae60' stroke-width='3'/><circle cx='270' cy='140' r='26' fill='none' stroke='#27ae60' stroke-width='3'/><line x1='285' y1='75' x2='305' y2='85' stroke='#27ae60' stroke-dasharray='3'/><line x1='300' y1='105' x2='285' y2='120' stroke='#27ae60' stroke-dasharray='3'/><text x='245' y='165' font-size='10'>connected network (same total area)</text></svg>",
    "options": {
      "A": "The single reserve fully solves the biodiversity crisis, because 800,000 ha is assumed large enough to support viable populations of every threatened species, making protected-area establishment the only conservation tool needed",
      "B": "The single reserve addresses habitat loss within its own boundaries but cannot address the other major drivers of biodiversity loss (invasive species, pollution, overexploitation, climate change) operating across the wider landscape; it also isolates the enclosed population, reducing gene flow and raising extinction risk from demographic and genetic stochasticity relative to a connected network, and it cannot protect species that migrate beyond its boundaries",
      "C": "Protected areas of any size are ineffective for biodiversity conservation because animals move beyond boundaries, so only ex-situ conservation (zoos, seed banks) is claimed to reliably prevent extinction",
      "D": "The proposed area is inherently too small to be useful, because effective biodiversity conservation is claimed to require protecting at least 50% of Earth's land surface regardless of the specific species and threats involved"
    },
    "correct": "B",
    "explanation": "Big Idea: EVO — Evolution\n\nA single large reserve directly addresses habitat loss (the leading driver) within its boundaries and can support larger minimum viable populations than a small reserve, but it does not address invasive species, pollution, overexploitation, or climate change occurring across the broader landscape, and — compared to a connected network of reserves — it isolates its population from gene flow, raising long-term extinction risk from genetic drift and demographic stochasticity (an application of island biogeography/SLOSS reasoning); a single fixed reserve also cannot protect migratory or wide-ranging species that regularly leave its boundaries.\n\nDistractors:\nA — Overstates what one reserve, regardless of size, can accomplish; it cannot address non-habitat drivers of biodiversity loss or serve every threatened species' area and connectivity needs.\nC — Overgeneralizes that protected areas are 'ineffective... because animals move beyond boundaries'; in-situ protected areas remain the cornerstone of conservation, with ex-situ methods serving a complementary, not replacement, role.\nD — Presents 30% or 50%-style area targets as if they were a universal, species-independent requirement, when actual conservation area needs depend on the specific species, their ranges, and threats involved.\n\nDiagnostic focus: Evaluate a conservation proposal against multiple criteria — which drivers of biodiversity loss it does and does not address, and the genetic/demographic tradeoffs of a single isolated reserve versus a connected network.",
    "unit": "Unit 8",
    "big_idea": "EVO",
    "sp": "SP 5.B"
  }
];

const AP_BIO_META = {
  title: "AP Biology — Complete Diagnostic Assessment (2026-2027 CED)",
  totalQuestions: 40,
  timeSuggested: 50,
  units: [
    { code: "Unit 1", name: "Chemistry of Life", questions: [1, 2, 3, 4, 5] },
    { code: "Unit 2", name: "Cell Structure and Function", questions: [6, 7, 8, 9, 10] },
    { code: "Unit 3", name: "Cellular Energetics", questions: [11, 12, 13, 14, 15] },
    { code: "Unit 4", name: "Cell Communication and Cell Cycle", questions: [16, 17, 18, 19, 20] },
    { code: "Unit 5", name: "Heredity", questions: [21, 22, 23, 24, 25] },
    { code: "Unit 6", name: "Gene Expression and Regulation", questions: [26, 27, 28, 29, 30] },
    { code: "Unit 7", name: "Natural Selection", questions: [31, 32, 33, 34, 35] },
    { code: "Unit 8", name: "Ecology", questions: [36, 37, 38, 39, 40] },
  ],
  bigIdeas: {
    "EVO": "Evolution",
    "ENE": "Energetics",
    "IST": "Information Storage & Transmission",
    "SYI": "Systems & System Interactions"
  }
};
