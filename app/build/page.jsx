"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const keqingArtifacts = [
  {
    name: "Thundering Fury",
    bonus1: "+15% Electro DMG Bonus.",
    bonus2:
      "Increases damage caused by Overload, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%.",
    image: "/assets/artefak/thundering.webp",
  },
  {
    name: "Gladiator's Finale",
    bonus1: "+18% ATK.",
    bonus2:
      "If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.",
    image: "/assets/artefak/gladiator.webp",
  },
  {
    name: "Martial Artists",
    bonus1: "Increase Normal Attack and Charged Attack DMG by 15%.",
    bonus2:
      "After using Elemental Skill, Increase Normal Attack and Charged Attack DMG by 25% for 8s.",
    image: "/assets/artefak/martial.png",
  },
  // Add more artifacts here
];

const artifactStats = {
  flower: "Flat HP",
  plume: "Flat ATK",
  sands: "ATK% or Elemental Mastery",
  goblet: "Electro DMG Bonus",
  circlet: "Crit Rate or Crit DMG",
};

const endgameStats = {
  hp: "12.118",
  def: "740",
  attack: "306",
  energyRecharge: "0%",
  critRate: "5.8%",
  critDamage: "50.2%",
};

const recommendedWeapons = [
  {
    name: "Mistsplitter Reforged",
    description1: "674",
    description2: "CRIT DMG 44.1%",
    description3:
      "Gain a 12% Elemental DMG Bonus for a character's Elemental type. At stacks 1/2/3, Elemental DMG is further increased by 8/16/28%.",
    image: "/assets/weapon/mistsplitter.png",
  },
  {
    name: "Primordial Jade Cutter",
    description1: "542",
    description2: "CRIT Rate 44.1%",
    description3:
      "HP increased by 20%. Additionally, provides an ATK Bonus based on 1.2% of the wielder's Max HP.",
    image: "/assets/weapon/jade.png",
  },
  {
    name: "The Black Sword",
    description1: "510",
    description2: "CRIT Rate 27.6%",
    description3:
      "Increase DMG dealt by Normal and Charged Attacks by 20%. Additionally, regenerates 60% of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur every 5s.",
    image: "/assets/weapon/sword.png",
  },
  {
    name: "Lion's Roar",
    description1: "510",
    description2: "ATK 41.3%",
    description3:
      "Increase DMG against enemies affected by Pyro or Electro by 20%.",
    image: "/assets/weapon/lion.png",
  },
  {
    name: "Amenoma Kageuchi",
    description1: "454",
    description2: "ATK 55.1%",
    description3:
      "After casting Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates 6 Energy for each seed consumed.",
    image: "/assets/weapon/amenoma.png",
  },
  // Add more weapons here
];

const ascensionMaterials = [
  { name: "Cor Lapis", quantity: 168, image: "/assets/ascend/lapis.webp" },
  {
    name: "Vajrada Amethyst Silver",
    quantity: 1,
    image: "/assets/ascend/silver.webp",
  },
  {
    name: "Vajrada Amethyst Fragment",
    quantity: 9,
    image: "/assets/ascend/fragment.webp",
  },
  {
    name: "Vajrada Amethyst Chunk",
    quantity: 9,
    image: "/assets/ascend/chunk.webp",
  },
  {
    name: "Vajrada Amethyst Gemstone",
    quantity: 6,
    image: "/assets/ascend/gemstone.webp",
  },
  { name: "Lightning Prism", quantity: 46, image: "/assets/ascend/prism.webp" },
  {
    name: "Whopperflower Nectar",
    quantity: 18,
    image: "/assets/ascend/nectar.webp",
  },
  {
    name: "Shimmering Nectar",
    quantity: 30,
    image: "/assets/ascend/shimmering.webp",
  },
  { name: "Energy Nectar", quantity: 36, image: "/assets/ascend/energy.webp" },
  { name: "Mora", quantity: 420000, image: "/assets/ascend/mora.webp" },
  // Add more materials here
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="py-6"
    >
      <div className="container mx-auto">
        {/* Tabel Character Information */}
        <section className="mb-12">
          <h2 className="text-4xl mb-6">Character Information</h2>
          <div className="flex flex-col md:flex-row items-center justify-start bg-gray-800 rounded-lg shadow-lg p-6 space-x-0 md:space-x-6 space-y-6 md:space-y-0 shadow-violet-700 transform transition-transform duration-300 hover:scale-105">
            {/* Gambar Karakter */}
            <div className="flex-shrink-0">
              <Image
                src="/assets/stats.png" // Ganti dengan path gambar yang sesuai
                alt="Keqing"
                width={200} // Sesuaikan ukuran gambar
                height={200}
                className="rounded-lg"
              />
            </div>
            {/* Informasi Karakter */}
            <div className="flex-grow ">
              <table className="min-w-full bg-gray-900 rounded-lg">
                <tbody>
                  <tr>
                    <td className="px-6 py-4 border-b border-gray-700 text-white">
                      Character
                    </td>
                    <td className="px-6 py-4 border-b border-gray-700 text-white">
                      Keqing
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-b border-gray-700 text-white">
                      Rarity
                    </td>
                    <td className="px-6 py-4 border-b border-gray-700 text-white">
                      ★★★★★
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-b border-gray-700 text-white">
                      Role
                    </td>
                    <td className="px-6 py-4 border-b border-gray-700 text-white">
                      DPS
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-b border-gray-700 text-white">
                      Element
                    </td>
                    <td className="px-6 py-4 border-b border-gray-700 text-purple-400">
                      Electro
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-b border-gray-700 text-white">
                      Weapon
                    </td>
                    <td className="px-6 py-4 border-b border-gray-700 text-blue-400">
                      Sword
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-b border-gray-700 text-white">
                      Voice Actors
                    </td>
                    <td className="px-6 py-4 border-b border-gray-700 text-white">
                      Kayli Mills (EN), Kitamura Eri (JP), Yajing Tang (CN),
                      Jung Yoo-mi (KO)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Endgame Stats Section */}
        <section className="mb-12">
          <h2 className="text-4xl mb-6">Keqing Stats (Lv.90)</h2>
          <div className="flex flex-wrap gap-4">
            {Object.entries(endgameStats).map(([stat, value], index) => (
              <div
                key={index}
                className="flex-1 min-w-[calc(50%-1rem)] bg-gray-800 p-4 rounded-lg shadow-lg shadow-slate-800 hover:shadow-accent transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg capitalize">
                    {stat.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="text-lg text-right w-1/2 ml-4">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Artifacts Section */}
        <section className="mb-12">
          <h2 className="text-4xl mb-6">Recommended Artifacts</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {keqingArtifacts.map((artifact, index) => (
              <div
                key={index}
                className={`p-4 bg-gray-800 rounded-lg shadow-lg ${
                  artifact.name.includes("Martial")
                    ? "shadow-accent"
                    : "shadow-yellow-500"
                } transform transition-transform duration-300 hover:scale-105`}
              >
                <Image
                  src={artifact.image}
                  alt={artifact.name}
                  width={100}
                  height={100}
                />
                <h3 className="text-xl mt-4">{artifact.name}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  <b className="font-extrabold">2-PC:</b> {artifact.bonus1}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  <b className="font-extrabold">4-PC:</b> {artifact.bonus2}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Weapons Section */}
        <section className="mb-12">
          <h2 className="text-4xl mb-6">Recommended Weapons</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {recommendedWeapons.map((weapon, index) => (
              <div
                key={index}
                className={`p-4 bg-gray-800 rounded-lg shadow-lg ${
                  weapon.name.includes("Black") ||
                  weapon.name.includes("Roar") ||
                  weapon.name.includes("Amenoma")
                    ? "shadow-accent"
                    : "shadow-yellow-500"
                } transform transition-transform duration-300 hover:scale-105`}
              >
                <Image
                  src={weapon.image}
                  alt={weapon.name}
                  width={150}
                  height={150}
                />
                <h3 className="text-xl mt-4">{weapon.name}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  <b className="font-extrabold">Base ATK:</b>{" "}
                  {weapon.description1}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  <b className="font-extrabold">Bonus Stats:</b>{" "}
                  {weapon.description2}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  <b className="font-extrabold">Skill Effect:</b>{" "}
                  {weapon.description3}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Artifact Stats Section */}
        <section className="mb-12">
          <h2 className="text-4xl mb-6">Artifact Stats to Aim For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(artifactStats).map(([slot, stat], index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg shadow-lg shadow-slate-800 hover:shadow-accent transform transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl capitalize">{slot}</h3>
                <p className="text-sm text-gray-400 mt-2">{stat}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ascension Materials Section */}
        <section className="mb-12">
          <h2 className="text-4xl mb-6">Ascension Materials</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ascensionMaterials.map((material, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg flex items-center shadow-lg shadow-slate-800 hover:shadow-accent transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={material.image}
                  alt={material.name}
                  width={48}
                  height={48}
                />
                <div className="ml-4">
                  <h3 className="text-lg">{material.name}</h3>
                  <p className="text-sm text-gray-400">x{material.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Talent Level-up Materials */}
        <section className="mb-12">
          <h2 className="text-4xl mb-6">Talent Level-Up Materials</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                name: "Teachings of Prosperity",
                quantity: 9,
                image: "/assets/talent/teachings.webp",
              },
              {
                name: "Guide to Prosperity",
                quantity: 63,
                image: "/assets/talent/guide.webp",
              },
              {
                name: "Philosophies of Prosperity",
                quantity: 114,
                image: "/assets/talent/philosophies.webp",
              },
              {
                name: "Whopperflower Nectar",
                quantity: 18,
                image: "/assets/talent/nectar.webp",
              },
              {
                name: "Shimmering Nectar",
                quantity: 66,
                image: "/assets/talent/shimmering.webp",
              },
              {
                name: "Energy Nectar",
                quantity: 93,
                image: "/assets/talent/energy.webp",
              },
              {
                name: "Ring of Boreas",
                quantity: 18,
                image: "/assets/talent/ring.webp",
              },
              {
                name: "Crown of Insight",
                quantity: 3,
                image: "/assets/talent/crown.webp",
              },
              {
                name: "Mora",
                quantity: 4957500,
                image: "/assets/talent/mora.webp",
              },
            ].map((material, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg flex items-center shadow-lg shadow-slate-800 hover:shadow-accent transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={material.image}
                  alt={material.name}
                  width={48}
                  height={48}
                />
                <div className="ml-4">
                  <h3 className="text-lg">{material.name}</h3>
                  <p className="text-sm text-gray-400">x{material.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default Contact;
