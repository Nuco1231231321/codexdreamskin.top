export type PetFormat = "V2" | "V1";

export type CodexPet = {
  slug: string;
  name: string;
  author: string;
  format: PetFormat;
  tags: string[];
  image: string;
  sourceUrl: string;
};

type PetDefinition = Omit<CodexPet, "image" | "sourceUrl">;
const petAssetVersion = "20260716-gallery";

const petDefinitions: PetDefinition[] = [
  { slug: "super-saiyan-goku-combat", name: "Super Saiyan Goku Combat", author: "datpham", format: "V2", tags: ["animated", "anime"] },
  { slug: "frieren-maplestory-v2", name: "frieren-maplestory-v2", author: "side_inventory", format: "V2", tags: ["animated", "anime", "celeb", "chaotic", "cute"] },
  { slug: "momonga", name: "Momonga", author: "side_inventory", format: "V2", tags: ["animated", "anime", "celeb", "chaotic", "cute", "mascot"] },
  { slug: "spinach", name: "菠菜", author: "Greenhorn", format: "V2", tags: ["animated", "cute", "mascot", "soft"] },
  { slug: "nougat", name: "牛轧糖", author: "Rover", format: "V2", tags: ["cute", "anime"] },
  { slug: "maguang", name: "码光", author: "black", format: "V2", tags: ["animated", "soft", "pixel", "cute"] },
  { slug: "fangbao", name: "方宝", author: "luo", format: "V1", tags: ["cute"] },
  { slug: "mojo-apple", name: "MOJO Apple", author: "exile", format: "V2", tags: ["cute"] },
  { slug: "silksong-hornet", name: "大黄蜂", author: "Hornet", format: "V2", tags: ["game"] },
  { slug: "purin-cat", name: "Purin cat", author: "Chierin", format: "V2", tags: ["animated", "cute", "pixel", "mascot", "soft"] },
  { slug: "vegeta-z-feng", name: "贝吉塔", author: "snailFeng", format: "V2", tags: [] },
  { slug: "aegis-sentinel", name: "Aegis Sentinel", author: "j3rbski", format: "V2", tags: ["animated", "game"] },
  { slug: "monthly-salary-cat-fix", name: "月薪喵", author: "xiaoyyy", format: "V2", tags: ["cute", "mascot", "anime", "minimal"] },
  { slug: "mianmian", name: "棉棉 (Mianmian)", author: "Feyy", format: "V2", tags: ["cute", "soft"] },
  { slug: "anna-yanami", name: "八奈见杏菜 Anna Yanami", author: "magixixi", format: "V1", tags: ["animated", "cute", "anime", "pixel"] },
  { slug: "noah-lulu", name: "噜噜", author: "noah", format: "V2", tags: ["animated", "cute", "mascot", "soft"] },
  { slug: "ash", name: "Ash", author: "zhero", format: "V2", tags: ["anime", "cute", "pixel", "robot"] },
  { slug: "iuno", name: "Iuno", author: "skyraker", format: "V2", tags: ["animated", "anime", "cute", "game"] },
  { slug: "xiao-hei-zi-v2", name: "小黑子-iKun", author: "mayway", format: "V2", tags: ["celeb", "cute", "animated"] },
  { slug: "xiaocheng", name: "小澄·薄荷助手", author: "fichil", format: "V2", tags: ["animated", "anime", "cute"] },
  { slug: "uta-anime", name: "Uta Anime", author: "whzhao", format: "V2", tags: [] },
  { slug: "uta-adult", name: "Uta Adult", author: "whzhao", format: "V2", tags: [] },
  { slug: "gutgeoni", name: "굳건이", author: "3ae3ae", format: "V2", tags: ["mascot", "animated", "cute"] },
  { slug: "monthly-salary-cat-v2", name: "月薪喵", author: "xiaoyyy", format: "V2", tags: ["anime", "cute", "mascot", "minimal"] },
  { slug: "kento-nanami", name: "Kento Nanami", author: "K4tNoeJ", format: "V2", tags: ["animated", "anime"] },
  { slug: "huahua", name: "花花", author: "max", format: "V2", tags: ["animated", "cute", "soft"] },
  { slug: "cute-huahua", name: "萌版花花", author: "max", format: "V2", tags: ["cute", "animated", "soft"] },
  { slug: "openai", name: "OpenAI", author: "Ayrcs", format: "V2", tags: [] },
  { slug: "codex-ninja", name: "Codex Ninja", author: "Szig83", format: "V2", tags: ["cute", "animated"] },
  { slug: "higepiyo-anime-v2", name: "Higepiyo", author: "rintintinjr", format: "V2", tags: ["celeb", "anime", "chaotic", "mascot"] },
  { slug: "erza-hibiscus", name: "艾露莎", author: "Lawliet", format: "V2", tags: ["animated", "anime"] },
  { slug: "gandalf-the-white", name: "Gandalf the White", author: "icaro", format: "V2", tags: [] },
  { slug: "fennec-fox", name: "Fennec Fox", author: "doyeonkp", format: "V2", tags: ["cute", "soft"] },
  { slug: "justaway", name: "Justaway", author: "Justaway", format: "V2", tags: ["animated", "anime", "cute"] },
  { slug: "tortie", name: "Tortie", author: "yeikel", format: "V2", tags: ["cute", "animated", "mascot"] },
  { slug: "kiki-ragdoll", name: "Kiki the Ragdoll Cat", author: "kiki", format: "V2", tags: ["celeb", "cute", "mascot", "soft", "pixel"] },
  { slug: "landou", name: "coco", author: "yuki", format: "V2", tags: ["cute"] },
  { slug: "xiaoman", name: "Xiaoman", author: "sapphire", format: "V2", tags: [] },
  { slug: "yoshi3d", name: "요시 - yoshi", author: "doyeonkp", format: "V2", tags: ["animated", "game", "mascot"] },
  { slug: "curry-dog", name: "咖喱狗", author: "YuuDan", format: "V2", tags: ["celeb", "cute", "animated"] },
  { slug: "canal-vorfeed", name: "凯娜儿·沃菲德", author: "HadesTop", format: "V2", tags: ["anime", "robot", "cute"] },
  { slug: "gandalf-the-grey", name: "Gandalf", author: "icaro", format: "V2", tags: [] },
  { slug: "amagai-ruka", name: "Amagai Ruka", author: "coke", format: "V2", tags: ["animated", "cute", "anime"] },
  { slug: "xiaren", name: "虾仁", author: "changyaowu", format: "V2", tags: [] },
  { slug: "creepy", name: "Creepy", author: "creeper", format: "V2", tags: ["game", "pixel"] },
  { slug: "specter-the-unchained", name: "归溟幽灵鲨", author: "eternalsummer", format: "V2", tags: ["anime", "animated", "cute", "game"] },
  { slug: "starwitch", name: "Starwitch", author: "September", format: "V2", tags: ["anime"] },
  { slug: "feiyue-witch-chibi", name: "Q版绯月", author: "September", format: "V2", tags: ["anime"] },
  { slug: "juanjuan", name: "卷卷", author: "Juanjuan", format: "V1", tags: ["cute", "anime", "soft", "pixel", "person"] },
  { slug: "xiao-gu-ga", name: "小咕嘎", author: "stonewall", format: "V2", tags: ["animated", "cute", "soft"] },
  { slug: "tori-tiger", name: "Tori Tiger", author: "syouzen", format: "V2", tags: [] },
  { slug: "piccolo-z-feng", name: "比克", author: "snailFeng", format: "V2", tags: [] },
  { slug: "yintuan", name: "银团", author: "nidehuakucha", format: "V2", tags: ["cute", "animated"] },
];

export const codexPets: CodexPet[] = petDefinitions.map((pet) => ({
  ...pet,
  image: `/pet-gallery/${pet.slug}.webp?v=${petAssetVersion}`,
  sourceUrl: `https://codex-pets.net/#/pets/${pet.slug}`,
}));
