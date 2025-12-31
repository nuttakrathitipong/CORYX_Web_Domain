'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "04bfd77a3045f2d9c4c6a72ecc827ba5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c8dda3f64988478233f801020693c4b6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a2e9b0aa4193bce599f1608756f4ecc8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3975e9f118ca4b9b21668fbdedbfbdcf",
".git/logs/refs/heads/main": "fc230a417e92c4be873bbb1983cf5008",
".git/logs/refs/remotes/origin/main": "ebb1038d2af203e9f9148d1a5f1cbe6d",
".git/objects/00/2612eb4371e4c37d33994cf1ebdbf9059eee9e": "77dfdcba83df645506628348f20a45b9",
".git/objects/00/b35ed8367db96a5d6a3d48df95ee2877b972aa": "c03a162ebce15fee0d42a6698a8bfe4a",
".git/objects/01/14bf4b1c5f95ec8cbdba384b91879ee8f614ff": "ec81fc0b0153714bef464f75cc4599ab",
".git/objects/02/cb5ad08f65b7c8c147538ab19d894a59e739d6": "b95249ded069e1c15216ddd934a80f3a",
".git/objects/02/e9f4df846cccd67f77c8eb829800c8fa1539cf": "3b6f58182f3ecc3fdeb81a8d129c94f3",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/5cc9392d9f0866856d6454820dc521d556ae41": "20553a39250f1bff00c74219f65c22fb",
".git/objects/05/3243258c489ada64fc674af2e58197e51256d9": "f1241970a6e63c0a129eefc3a834fae5",
".git/objects/05/a112e98759978237d67aebd38e69814b9f17b6": "785043a2a70dbcae813356260cfd3be2",
".git/objects/0a/4619061d0c22ca68d75e63801ccfb55c6f8d60": "1e91252a74f51e48b54fd2047c9f9fbe",
".git/objects/0a/91988b3c9e5f34a04612cd53093078fc38b851": "b3a31bb3dc90c05be6e13d046dc82084",
".git/objects/0a/d4e6d501025fe095bc888bea2f3ea8db067b08": "92b151f963ac15f53358b59cb5ca5403",
".git/objects/0b/f5e270a786ad2bdbfdd699f058b34e388ed5ab": "7775f371c1cb75c96ac07f7a979598de",
".git/objects/0c/09f7c7ee0798f72006d0f9b0cdb4b7e79419ff": "c8391911c8fd3402ea53ebb855ff927a",
".git/objects/0c/5bf267220849707724f7aad7013225bd957587": "82afd48c8061bb1a7e9700d752f1b8fe",
".git/objects/0c/5eb8a24acece0f8ef36d279fd266d8fd100513": "00ef90151d8114d237e119b443e0bdc5",
".git/objects/0e/2092f2f1b14b729491478c21d0e39d43c8d890": "f9980dfb2d20fb0f63983ed8e0ca278c",
".git/objects/13/48b1d39c6cbf06596169443ed99db62691ca90": "0fe648328388067eeb11063b722aaac5",
".git/objects/14/3adc5222ef8348a7673f3fab4e015a807865d3": "ad36e24543c6767315b3cd7c17481146",
".git/objects/14/f27e23e65dc21a86aae303ad8fc56b043d979f": "0a723bf878c54cd7b730a08dc55c97a1",
".git/objects/15/840787094c92ead8d048d5f019d83260e15cd1": "a7dd0c3d50c0103c0f6e1f5954ee4315",
".git/objects/16/29beb42018b99cb118a57f65213aef226199c4": "cd468bbde4a3e30a5a7a68b51b958de7",
".git/objects/18/a0645613688c4ff8ee8f88fdda687fe31cd056": "bcd9a98c74508b016c11c24125a26eab",
".git/objects/19/6831eae88762417b4b2ec0eeee0c7d9d5e9739": "3d6b6e676df2b65bad2bf097691e7c85",
".git/objects/1a/79a4edd7b61b94c915d7be6f54c698d94ec5e9": "7e437099cf42fb56bc27e3d66cffcbe5",
".git/objects/1a/e411ef59f3b74565fcb36d2e04be746e63e2a3": "edc7e8340e3cf423613570936c4c888f",
".git/objects/1b/84f8d046c32a12d86eed5a4228f3075fdf732f": "4fd6835d186e02b47ed0e137ed614228",
".git/objects/1b/d6dad1c161f236c1317a2e74e38d56830c8c6c": "52223f2f301500448b358ac6ad241435",
".git/objects/1d/f21bc5c434f08188f1ca9b9a0cd5b0aeefbd02": "5aab8f94a4a66e85115da86182e9abeb",
".git/objects/1f/5a8f2545aab53a2c1b7d7fd6a4b56883279d23": "19d572845050c9de50d0bbf5b26dfafe",
".git/objects/1f/60d8cc8e56343f8dbaa0955f55f0cbb340cc35": "ebd3d05685b1d7e7d88b9ca9a21ab4b2",
".git/objects/20/50f67ff1ffaa2fa07248864895c525868c2134": "37c3aff8cd222441b9fb90642d00d349",
".git/objects/20/f35c7f2df7ae4a6b5ac883d6f522345806ae14": "f33124d625a1a6efe3df7512dd000e8d",
".git/objects/20/f9a2577a4553a7404add768cb2613e10f34c9b": "04d1bdc62f141742d59ade3fdc82e875",
".git/objects/23/124f26545836ede9db0233b7911bfe39cc3291": "4fbcf15458404882955a6c606e2603c2",
".git/objects/23/287b6ed89b248f9a9cbeb0c40b7258e7f8b849": "42d9d6398e32c65342df3bfe8801e1bb",
".git/objects/26/5eac3fd2d6e343e7b98c7892d5e4c9611abf09": "85d831db55c7130687ad4a90754f7b1d",
".git/objects/27/5f9286f2f66afbd4a55f7fe1b1387e447ddc52": "0d561fcf70026632f41a00f03018c1e5",
".git/objects/27/f49dbe3e86f450a5211d18e08373704c7c2538": "63f9fe2d6a099fe47ac1a67eb976330c",
".git/objects/29/17b3a1a60217da33fb5a289a908e4ecaf37779": "7ebf3f53fbb1c0ea02054d8256a05ae0",
".git/objects/29/475e391cf68202b0b55eb3930aaa642ba2112f": "5f547eb574e08ced0389a8478572b873",
".git/objects/2b/4342ded11a3b072340a330b4a341902a24c00a": "4bcb695200667995bc005b923cad394d",
".git/objects/2c/2976e930f9666e0af53a68d7dc79befce3d9df": "01fbac0f5dbe10d903b21efe010e9160",
".git/objects/2d/069319e0ac396dc0a98dc76b7a3ae7f0a647de": "a8c242eb38776ac48bbfec0e5bf3b03c",
".git/objects/2f/273b13e9cbe44ddf7b0a93fe856a8f2c665a49": "2b1cd8cfa02f43c46ac630489da094d5",
".git/objects/2f/3d8cd2a585e426590dc341eb5d528de7245bcc": "3bacf2292e91596f39ac4f78951f1351",
".git/objects/32/dc7229c2633861a497964e0e0476ab2e30a98c": "d04ad1961ff5b692b762ce8a6b3b1359",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/e42052b6172b448515243dc79ccc7a0b9968f9": "70377b2f4b937dbddbc380f9cc06affe",
".git/objects/33/ec0c30417831057edb06b1dd8029ee72519c18": "70770bb703668f216657384340b730a2",
".git/objects/34/6ed14a05b2afa3b452ad2a7c8a657026d20497": "52e5d3d284cfdf4eec482fe839ac2818",
".git/objects/35/1e19d45898d689450df25633fd006206aa0738": "3f26b44e0b624ebd82a45e5d4aa0b5ae",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/0905a92fe1830aad74d44f6045964d84632bb4": "eb9d03c75652fce0809c401e43f037bd",
".git/objects/36/30845d45ddcce156d81fb5605846b2fc118883": "3364b945a83881fa70fb6efe597c95df",
".git/objects/37/66b16054fcd7d834c96484753b374a7bea2bb8": "8a63de9e2388456ec73416a69b5ec2be",
".git/objects/39/fa98e2024625df6d6605fbeff9dfba4b6f4d00": "b3ffbec542c84f867fcf15001441c979",
".git/objects/3a/5a4727463cf56b17816f879aebe4d5dbfd63b9": "bf4656f232951bb83313cb5d5daa321e",
".git/objects/3c/7d8ccb4a9c68c101d39381491795c5606c48af": "da2aa3929450de19d31bc4a19c9614b2",
".git/objects/3d/29026fdffd45058fda5ef207ec316ac44febef": "6b6d1a12c6178282071a8a96dda42eeb",
".git/objects/3d/4700e6815a4465e717964690834b073d7784ba": "10a9acd5cbcab80bf3f26609c4a38d93",
".git/objects/3f/085e7dbb9254d7770a8b272bde20f73e6aaad4": "ea0e9a52ef65162c8e2c477847e17b9d",
".git/objects/3f/550189b9e5a5cd32e52070af7454494127f9e6": "9a149e69d99e272ecaf81a0be9241703",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/511855b45bec18e686c3ebf8badb082b4f91cd": "b877534054e020771a9608f3328d3265",
".git/objects/42/111bcd6df9b38355d9d6ef112643a762533025": "8c1e1fb7a6ab4dacbeb590631c510d32",
".git/objects/44/86c2e13e8243dfad7bca7d87d5e14b6ae2290b": "181566b767bc699c8bd683fb730556be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/970a1d7dc7a858c3b94ca32d5ec56ba6745d9c": "83222d4d491be572a4288810b48e3f79",
".git/objects/46/a48bfc5590bfe2306ee4407e62d975aa2d484d": "138e8ea5940ff4523506de0e7d2db8aa",
".git/objects/46/da745c7439feaf6f9364ef03a0d0d468675de9": "9614db57b356d0722ce7174befbadf68",
".git/objects/47/90b138bc100a8afa5dc211f481810c6ea25bdf": "e54ce71d32819188614eea46b119b138",
".git/objects/47/e5e4f84887e08472a4a87f9d12d01432631da3": "62aa2c12ad87b22dbff28578ca08886f",
".git/objects/48/f49a683f91b2113f684d2be4184bbc31c019b0": "dd869f84c25f0de60900ac6e98e18190",
".git/objects/4a/859d465f07a735973fcae52e63ca147de76693": "fae77261b6df478ce20863011e81252e",
".git/objects/4d/2b78648154339501cc6a29d0d5a63eb1611c2a": "186b4f68b4ea6fd773cba2e67f0cd2dd",
".git/objects/4d/b82a2468cca07a0021add1ad5d120dd178e1de": "3067f04a96208aac216e62e7dd292011",
".git/objects/4d/d437af8f01e908901a5871375a1dc3ac5c2069": "97d01b0f519ba52b4f807a15df417519",
".git/objects/4e/740ec1aff1c84c79afda44d60ad9f000e3b9fc": "f38b81e0967cd057c587b8afc5f9c525",
".git/objects/4e/b119323bf2d4d638dc38997d2adb96ff090020": "773dd6edbebad3796680fdc36407268f",
".git/objects/4e/f742a6d2aa66c98bd1c24874a8652c8b372cfa": "4b8e3563968378accd50a2d605b17285",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/796c69a54a39f82ea95d39f54103b48a679069": "02200cdd14824f4e18eca7762ce0bac9",
".git/objects/4f/bf2730cd897df0a823091b62871077f9664a6c": "eebad8f01bf4482820038625e7c0ffcd",
".git/objects/50/a82242e972a932e3de649d6db75495d27b634a": "e9daa8a48639fe1d3a4b38942958a405",
".git/objects/51/0f95270df54639418e0786fd05f0dfd2f72860": "a0a874a405b48915219eab29454690e2",
".git/objects/51/2b44fe92b0534f62ad904e42e3b58b9214ee64": "47fd2eb4284878162cc8842d5112ba02",
".git/objects/53/e7e6d28e56a846c9a7fa420f7e2a6309a884a9": "b2483115d1d69bd4d5f8a96a0afa56a0",
".git/objects/54/e958fb67aced6e17fa4aaf9d697b7731d5c912": "cd080857effce0830208d4d139879fc1",
".git/objects/55/5d4e6737d6639a509699adf8d709980144b809": "0b15f04f2b8352d34c8e373db7ae55e1",
".git/objects/56/cbfbb5806b656ff6ecbbe963141b9490351ff8": "753783592538ce9ace3e02419b9389c8",
".git/objects/56/d6974fb541fe8150f98cfe6bf65fea708465e4": "8a3e7b1b52435ef9026280771eac8242",
".git/objects/57/214843e1c40ab9f3ff06194799a93d3b0c2f2d": "2f6d3a4dfc4821ac829980475e817a92",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/c18cded54cd602afeb340ac2cd1cd203262a8e": "a4d2ecc845d88f276d677f29b4f2f04f",
".git/objects/57/dc776dc39163145593484fb60d0f1a824f6a0b": "c95e0c3cd94ab1e1eaab1860d41188be",
".git/objects/58/06eed856d1ab88e28e0fdc08fa4ec0cd88c594": "36ab518509928920e05915da5d183593",
".git/objects/5a/50fe44b8aea836792c57a2d0fff18fb25cb65f": "6c8cdad40955a78ba120b8a958f231a8",
".git/objects/5b/8862ef541e79ddb544be14540340f9e236136d": "c0377679ca9625e0c9ad5d075cf77eb1",
".git/objects/5b/a621aa33d30583c375645027556cef55ee7baa": "74cbe596592643912e39abb3d52df670",
".git/objects/5c/75af414c8b63adc9b73419ca262286b2972ab4": "25f953a7c7f00aa824a249d684f7e27d",
".git/objects/5c/80287f533e76a7c09653f3abd990b5005c34a3": "491e42271a18a52e3f1c0bb774637e9e",
".git/objects/5c/a90b886d31c37bb8bc3419ad8695133551bb52": "d53b07a204cf3df2187570f5b54cddcb",
".git/objects/5e/a0efc3361ada1b8091aed1352abb79262d7741": "ef49ba29c3a8e33752ae3f30df3a3f89",
".git/objects/5f/33f447e14c547ff2be537555196edacca71e40": "c2ccadeafe3a3f8a08dd690dd440f24a",
".git/objects/5f/973c86b45fcfe4f474e71b23d5877f50ae4452": "fe6fe22ad61ccbef05f46b9759cb7faf",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/0149f3693e4061aee85aab8c9959ca3370cba5": "890c5876c833d5d6c2969736f85ef74f",
".git/objects/60/49d02e5517a88f72bb492460794cc6c57fc2fd": "83b63fe112c0ee47097e27eb78179a84",
".git/objects/60/664620606c890819190163f3b6fa938e7ac5ea": "827bbe59235cd95324428337cf2da5f0",
".git/objects/60/94bfdaf2846c2260bcf64266322284fb74f922": "cb3db74fc2bca2d63b6da23574dd5911",
".git/objects/60/d83237640330c1141af10fe5635229d616afe2": "f8d2bdc9c607946299bf404f87aeec14",
".git/objects/61/0fbaf1fd70380733ad78c74eee6329b6e93934": "3124fcc31987395a8ca49af672091938",
".git/objects/61/80ae32ff4f61bb686722aa16b82cda1d356194": "3164877bb25ff818dd1b00425de283e6",
".git/objects/61/f0fd29927a7c6073f78ec1251ddcada19a8c9f": "c549b7d2d182c36e336d750d1747d71f",
".git/objects/64/23d771e55be9779d377a14420e48ce96f70e3b": "ed62fe61adf1e4fbb06368c52148a4ec",
".git/objects/64/3ae6bc1cc933df2ff051ad203a5ace72140fe1": "bb9314b170b63d2729e5906074577dc9",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/2e79e76369610e475d1f2b377b8448a1cae1c3": "3cf27257f5632c84f84e69063912ff60",
".git/objects/65/ec09bc5ce02be9cef0364d16dd8f0048c351b9": "fd8a3e83b818ecea8babc1b84a77715a",
".git/objects/65/ecf6ef0f9b5f9c3363cb4feb456ffa9b286b94": "2358292c9a6578aafff2ab5df1fe046d",
".git/objects/66/05ad26fa00109e593734253d01e233a2b20dbd": "cc10fbf3cc0804d917e0d993a78f86d9",
".git/objects/66/45b897c161bfd83041d5665ad6521204816065": "20fa13edbad681332fb2faed98378502",
".git/objects/66/a5a85c85bd50bd8fb7788dde3908deda0827b0": "5db7569e7ec0997550a97576b3314640",
".git/objects/67/145dcfac3c02b291e5d4950116be2532286d14": "490a5b6d288a94509e22828f9e40a720",
".git/objects/68/004e034195e1abbd239ee83d4c3c3081de4a63": "720678a0d64f7898ed65ea664a7c71e3",
".git/objects/69/82109186a99ae510a11a3fcc61f69d2d6e0c1e": "f346811b6274afab0b106a742e6ef7f5",
".git/objects/6a/bd23476dae59cb48fa5454cc1dbed4f9053f86": "8698a259b6e1b6a9a34ca3b9e06b9b77",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/74c1f4ee123de281ccc05a1d7cbe7f38754146": "ae80c99eaef57f4f1266e33512961571",
".git/objects/6c/8cf52fc86d388f11682a203cb9084c8b4959f7": "4279112bbf2db316a8869c987817a43c",
".git/objects/6e/28d858fea480dc7a1c66058bb6a1f18532b6cc": "2c7721f0312124b48dc21c7139c82833",
".git/objects/6e/ba19a8834b903e504a024ed037e39569494d20": "d0443c1e29d9b5454bca10c0d14a027b",
".git/objects/6f/8cc696d9c8e5252be2e7c1d9b17aff8a35c3ae": "f4a63d67b19539a9ba478acc70b144fd",
".git/objects/6f/d81bfc6785e5daeda20ea708086f12d17778bf": "f74928e5923042650243ca97e9fa870d",
".git/objects/70/2ce590f686497395ac05ae12083e2e24bb2172": "94071b09492aebe3c4aa6fee2fb620de",
".git/objects/72/8e942d9e03409117037e6291890cb8686e1421": "cd29149c5ed14005b7a251fbc75c818c",
".git/objects/72/9dce316248dd8c4966e07017930435b5d128e6": "9db9f867278234c0837811a0373a3e82",
".git/objects/73/7430ce187df82b06d45bc7e6710ca6dca7f123": "d98d698faf1266890dc75434a10b6c2e",
".git/objects/73/898d4b54534d297c8f047ac480418c0a0f91fc": "1b82a7954efa867e5c4037df393d71e4",
".git/objects/74/43222f3352d1c04d5bac706a47fca074c0368b": "d480b2b01992987a50001c2b20eaafca",
".git/objects/75/2fcf05c11e692843517c3b4c6d5ba5c0162ffc": "d9f52c70efe282389e54d81c91272991",
".git/objects/75/fa24b2c60d2f18d2e7d1b59efe9ffbe87f2c32": "d89ca2ac663ea4728a44f0bb68f2994f",
".git/objects/76/09030811b5b924259980d2f5424757572559da": "0a59902d89aec30e77daa80b4199ea8d",
".git/objects/76/67a356ad1dc321856eae8971ebdbc89fcdcbcf": "7d3b5cdee588295ea5c698b58b2d73e3",
".git/objects/77/6c9348f22a944eea2bdb49987660d5e9cfb154": "f8e48c8bac8cecbab1b46ff277725ac0",
".git/objects/79/e29ca506b5f893c2707f2551699ace63bcc9c5": "dac56c78bc9f8e9b80780456024c1893",
".git/objects/7a/ff2087f2862f098a71433d0ee1304073e0ec5e": "faac32fe5a6d1ea183913c07f76d7b7b",
".git/objects/7c/04afb8bdcf063b4ef476c0c3afd111189e8420": "9d2e495c388447db2e1872000664d358",
".git/objects/7c/221dd3a4a859e056258524ce308029d1ffd339": "17cfda7177a192028d9d8f400bf73097",
".git/objects/7e/d7c2ad0e957e936efa648bbbcf6014b26b12d5": "673bfecc2762da465b4d526fb2c03364",
".git/objects/81/66532c0084ec1478e9efaddc37ef5486e10ba5": "42d0a74f7668cecb27da59187bbc5d75",
".git/objects/81/c298954b66add6dac48e7df2c5d5726e30e3fb": "b75cd9164fe1490d77b68df16bf17881",
".git/objects/82/185cfe32c77cd1e56da45a6e79fa54d1c185fb": "22cc05bdb252c639d0af91765796143f",
".git/objects/82/8ed75f184708ff3641306fea859c399cbf0644": "b400f7ceac8dca1fc1f62d350b73c297",
".git/objects/82/ae1f6f2ff6f8b85d848965a1f1bec8d48c264a": "5142516abeadb964287b42494ce3d267",
".git/objects/82/ce966be8583b300526d540b7799b9785294d30": "b9bb7466a2cf33e39e4f0e4c63f5fa3a",
".git/objects/83/217847e3b3a61d3339e12b9624748de6fa23ca": "91d96fc8ca3a110fb1efa5771b438ac7",
".git/objects/84/840a5bbce3b2dfe2f95a6fed4f2687a15a363c": "97d07962775929b5e0f9c7e06fc643eb",
".git/objects/85/28c77df1955b0a8db9924112cd7533ab16c05d": "34435353d167a5dd422503f5df7a5b31",
".git/objects/85/3a5067d88b23d7a99dbd2347f7cfd70bfa727c": "860fcf379cc766ca3445bce802c61115",
".git/objects/87/2afb75251deb2caa86700c461b66bd39584460": "98e39c7393c551e9570bdf6b769780c8",
".git/objects/88/50b7390671c6888fc3cd28a8796c909004de89": "da958335800ca4958e5c7bf181cce596",
".git/objects/88/6e774380cc72d00ebe1cd30fb7a1815d39d668": "d46e27c44e2dbf76e2fe86c979c650b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3830b079ffb0702510b4456b8c95e941c8dca0": "77bb7c2dc0ba5951b51ea9aa393bcf74",
".git/objects/89/73f0cea5b1f5aa0a2674b2c3f2655e70fba351": "940fa4a51d3a707c39f922b7f6296bc0",
".git/objects/89/cd81a1979f4b2c2457dfa0a19c60c0c9717d06": "61a1d0e4037df2660c39f4cb0576b367",
".git/objects/89/f1d942ff85f79a6ee490df8b2515d71ab89760": "5ae8fe7fc8530a2a70cf11b785b408cf",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/410971c4a0218a02c3927aa2f7e977a3a97a6f": "752b1780f8b3cbbe064b2350b66d636a",
".git/objects/8d/4a19dd9588f407fc76864bf853f258902999f2": "4ef1e64fc4624eee27203c3e8d39e11b",
".git/objects/8e/80526e5dae4cc50d7920d3bdbf185bca7bf2bb": "5c1ee30377545aee82d2796927842792",
".git/objects/8f/67db732e55849046e2bf71dff02c00b83996aa": "3e0d6ea4bcbdf8867541597a6e8d5538",
".git/objects/91/15e5d19203bf9c1cc25f06f67ba5cf2eaf3291": "3394500337af428f1372d181b94f60f2",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/e8ae87ed7e4af643949b4c3f7634a49115ac74": "656e950929387681de8b6d5919770bea",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/30436e41d7c86bd0877047ce7343e26e8d848b": "9bd6597833a49e1d3b4a502a5706afa8",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/95/f40e5a4b36c7258d1ce757d6f6a30cc5bebb89": "1b4b2ab867f43910acbc5d11d043292f",
".git/objects/96/671a763cc098a2d0726258cf20910356e52f27": "025f019ba3ecd87afde82261a0a18865",
".git/objects/96/8f59cdbb8021fa041374f31542c7ee2f2b9fce": "455b0744580e7e061dafe5b9b5ea53f0",
".git/objects/97/81dce54dda27bb407c8cb9a7c50587926c2cbe": "b480b23e49acba676c7516c21c5cac17",
".git/objects/97/e0c517771d0fa2edacdbda4ae9fb98cc1580d8": "a5eb03dfd719f4abc862f1744a21799a",
".git/objects/98/7c30bd7737cca603c67b9fc33fc8a17cf91893": "efe40a847c466b723eba65be6fb9585f",
".git/objects/9b/2d959a7ec83690553945a154b21815bda25523": "d2168ca65b12b68462def38e46c64546",
".git/objects/9b/41d6183e2124f44be4e36c7c60adfd12ee2f0f": "caa8a4b3b159c93c287d23464eabbcac",
".git/objects/9b/4adb7d37fdb48de77b147cd67f78374f620d45": "7406d9b88c8481ff5bf564e2b06c4b27",
".git/objects/9c/047843f12ba487a868c37e2f63ce2c1eb8747a": "892b2b45929778dd6b279c05c90590a8",
".git/objects/9c/80852f8f6ea263f35f002feddc52e7e57a7143": "e43d5c5ca9cdb43e66fff5251fd67c78",
".git/objects/9c/e8351ba81b0d5b8387c53791c71c33d5f4e93f": "819d66c8f1e2de6531617c43e871c4a0",
".git/objects/9e/5068480c9916d504e9ab5d9a01f1fa4f3f9739": "d6006f6d94c949f85abae1d9e0f2acd8",
".git/objects/a0/a1e6e85ad0b0cf11e09d3fab87938009ae061d": "279ba25981c7e9b8b5cd3c0fcccdf479",
".git/objects/a0/afb8439ec78598048d34536301f8726c790dcd": "5c83791230614e03280c7f277d1f9244",
".git/objects/a2/4928a2fcb8df25c0c160efc78f0f867c84465d": "5608f9fbdad00484160b7838ad5d736e",
".git/objects/a2/e9f2f698b9e0675d0a67a5797b834408d4bd73": "17f79c39d0d77d5ea4b05c96ead895b5",
".git/objects/a3/1278d42f348123b4d1db5b7dd1e1a462e3881a": "2bc3e10790fd4ea3c6894b53678de1fd",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/705fbe69233011547bd6fdf071fdee9569bd04": "42ed0b0078358e314530ebcb378e076c",
".git/objects/a7/1b96f671a90eeec259379ac6b2c182d34d9d94": "5bfb28b48f3bb2df8d00d2e6d67a8504",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/00b6cdb821d759de2428a8377302e25ed3702d": "d3b1264bb84203e02bb6ac7e475ab993",
".git/objects/a9/36a6520eac2646e87f77848a8863b61346e700": "f23dc9e63b43af808e2aafb6e8bb397e",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/25be720e4ceff45b4add949f4605b34e736a9c": "ca22737099230e9763553f60569adcd2",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/4469f7a2495daaae14c0e4235c0a07ca1bf795": "80fbf99b7e4a0ce8770ae0ad4ed25fd1",
".git/objects/ad/d1e904221ee95f97a096532222443cb3bda352": "e4bfee60c836917f5c31e19d6e60187e",
".git/objects/ae/ef3e3f6dae2227aaa3843aad1e35c2496baf1a": "d43d9e0220ca7fcb0dcf2fa84c99cc5b",
".git/objects/ae/fd5776cc6260b40a42eb00f95da4fdce9e1355": "89df9a20df4de6e225531a04bba61cdc",
".git/objects/af/0360f8a8ac945ee50eee3ff8f8bdb66d0e45b5": "cfb7d791704d8a41fcb4a5d4d0136c4f",
".git/objects/af/2b9d5b58fc37c7d5014d18f5ee193010b401b2": "39deae7279123d5e7a412ca39fd2b5fd",
".git/objects/af/d246a2735fdb6ab68abaa89feba3cc38c9bf4f": "eb4650b7135fcb147b1dc3cbd0a4c50e",
".git/objects/b1/54c82a3c1460b25342e18b52e9780343767506": "732d9c7d16b694c6a163c22b1142ed44",
".git/objects/b5/f6a8888a31e5f3ba09a7745cc9b57e1b37ad86": "d19af1dfc1b2d893491168c6f3470a63",
".git/objects/b6/4bc22ae0f7fac602d0e14ecf4e643b3d212544": "9e1b64b0ec5180769b4780ede7119e9f",
".git/objects/b6/dd14fb052325ef243f535490f0ccc5859a90d2": "cab9c6e16ccd6e2141b74e7d3c8ea33a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5dbe5de9a7f32c9e33e20fb1ea6e432d9468af": "85b5a481500adfa975c4709d0340ff82",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4a70f3f50a61edb6682f3f043e4bd9fbecbae8": "91a36b24f5d86b1f9cc590421dfe7733",
".git/objects/ba/2713e8e105bd712a5ca5218f5cb781f688bde0": "57ec8abf46e543cc800c498cc9ef63f5",
".git/objects/ba/ac33da83391d8e0612709aa6be9a3eab87b3b7": "b1efd17e67e52e24a75b6c9804f361a6",
".git/objects/bb/8acc5d50de72f4ac8873bfb650165342730ab8": "d418dbe9ff1948f2a514e8d0bd5f49e0",
".git/objects/bc/193de96789f6490002f74241d13db4542368ae": "eec76bc82f94ce68951ab5e25853e2ce",
".git/objects/bc/4282dd9aace02e4fafcb66bc45abd16966ec95": "5f125220c54c89ad6ab2730283fa6fd3",
".git/objects/bd/2302b8af6b83cc22146886e7b979934210e0f9": "f72e99f1a3a812ed9f99d789dadec4ba",
".git/objects/bd/27ff6f51d73743603cbd6c8f0ad4e4deb08dae": "225c9707a10c1ce3ded99716d09b45f0",
".git/objects/bd/906da5f4b8b993eed9f0098f9da545de9d4c38": "d7aae13691beccb224cc8e9da0d3e89a",
".git/objects/be/52e067020367dd4438c5e596ebf0b7424dd7b2": "d9819c8684019f368664dce5cb608fae",
".git/objects/bf/12615e022017dfbc82409312518b16d506b3a7": "0c4a9cf5a10ffd73bc979d39f7b73550",
".git/objects/bf/6180fde9eaec5df4032a4e77907cfa3e02f8e6": "5a107b5787868b17c3d47b4a7c2d6d0a",
".git/objects/bf/6ce066091b5d4ab733d76f1133dd13407b928e": "e94620cb6d2b08f15924b32cec48398b",
".git/objects/c0/06d6fd20d8b782590e091938dec3bbec1c6e57": "eafaed5a3d096f81a2df0f44b58b2bbb",
".git/objects/c0/bf86c0fcd9eae8db6f1d6ae9fef5a9668adac6": "632325269d4824e9fbf1c3d5be95a3a6",
".git/objects/c2/dab6ab90bef1e1ec80c44b3a86d060dde69587": "d70e84518ef9870301a4983dac2f506b",
".git/objects/c3/d4df64d42fd9ae204a3fe241f2e0edef9ab43a": "617330eb5da1d3996631de2c958c9f2e",
".git/objects/c4/31d39b450803b1cbe0de461b21213baf0b0b9e": "15a6290e241afff1ea3bdd6da035296b",
".git/objects/c6/3a21d5084fb3f9a5c6af751b7fd090aeaa426d": "8ee34f2060dd86d2e9c6df98c146901f",
".git/objects/c6/726bce470dbdc1de4aa94c478997266583e69e": "8322f749d63e513c8dc5fad004f6acb0",
".git/objects/c6/ad58815f219790838107e2979b5cdb0bf71b7a": "4b7e0f2b10a78c2854583709db42b5f0",
".git/objects/c7/d2f1522ff36bb176b70540d33a41c07c93aba9": "ae18830ba1df6de0d39721325a2f849f",
".git/objects/c8/864bb8199aa53ba6340a9b55abca31f8a22d5f": "217c133b866fe70c02b669f8d2fdeaed",
".git/objects/c9/160918c56ed44e1b02fefc62cc79e137008735": "ff906f24a84b15ffb633cc11bec499ef",
".git/objects/c9/c5d30e462cf2d513974228d3686fa4ac824628": "8646c82d341bcba2528d6ed300ca8e23",
".git/objects/c9/ca7e37d2932b534c0d721fcceadb8a3426ee9f": "9a8e651f26160f2386a82ed4f51bb3be",
".git/objects/ca/5239715bb72db6f276be99e002fd066b005bd8": "63f85462eafb62db5ed9985ce1ef7254",
".git/objects/cb/f016fee05044b3031149a4920972a5badc1077": "bde13e66a5c161ac362223e3d29effcd",
".git/objects/cc/cef891318ab87210aa077ec9112b11b1d3501f": "4073a562b71bad919afd4e7a49a0a0e4",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/05ce18f4f2be4ec3b0768be13292ad87766b7c": "a3d16083f7b5cc434548664e7d42e978",
".git/objects/ce/7bfb14401f398386a60c26ab74bd1e656d730d": "890e02830c679099c1e3166ddb1bf901",
".git/objects/ce/a7e2191b81de21177181b1acd3398e1a896362": "38da02def86ffcffae47d800f232c909",
".git/objects/ce/d3f592f17adf4e66ab8db41da60d6c8f13fe76": "5dea17edd42e382d3ca0a12282860e75",
".git/objects/cf/932064f38203929610088b8890a396b08d3bbf": "500e8f4e4a5bfe35010c54da5fc90114",
".git/objects/cf/a211eeac0a35e4c3689b306ea2c560d2a40164": "02c26ad2106b89a9e9c2ad0a9325d567",
".git/objects/d0/101e197a6e0f96d21d0ccf61d6e78d2656c764": "e7ab2363191e31ba02430d1f959fe04a",
".git/objects/d0/129719dcbc325f36a18d13770706abca3cca22": "6f16723ccf6565f166009569b05c8a7a",
".git/objects/d2/38294b942924925be19b15654466fc9c19ad5f": "4a501cb662f6f526917ffc3ddfb3d3ee",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/44ebd55876a450d1e6f75a0339eaf55810c363": "168a8745685e7410a4a0c61d64aec474",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/30c1754fbf6775e56578b9df7b20a7c3915b5f": "074f2977edf97a448dd11b6027a73c13",
".git/objects/d8/81f0444ff8bcd3cc356947f66ea679f9f5bde8": "977b641d062339181075545ed8ce5379",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/9cb134ba6fce77cfd97c80419b30e2e352ef4b": "36fc7aeb4c6f0d2b453136cf2cff358c",
".git/objects/da/075f759046635a226679fd18ac89f3da216408": "b6ea6d7d949bbd1841c33ec4d7e486df",
".git/objects/da/8c0e8d668ba8afcf1c42fa6c165424e527c937": "f11d9c62c4367f65365729c2ee61ca4e",
".git/objects/df/6d95d36603cb2eb28f00de19de7cce296fb646": "6ffb20218e2f6f323e34b74e5519055f",
".git/objects/e0/0e55951467f3459989bd93e07a93512644e98d": "2744ac0ed33db596f3316f317b657a5b",
".git/objects/e0/314235240001dae148600740a18ed40b392fae": "7e9b9a2670c326d88daf69d36d1c692d",
".git/objects/e0/df0b85edd2fa3026416c0481f078f3d4748eef": "ece8a201c2641fad812d57cdb07d7f18",
".git/objects/e2/07508aff6fa6fcbb789f665d676eb7fd48c0f4": "28b29c9a2a2e1fd1df5d0c76f0a39afa",
".git/objects/e2/1aeee8f9621b1ab28a5950af7efc7f778abe1d": "548e4baed4f5549237f584b15e482680",
".git/objects/e3/3d982604360169b583502d20d16d3f5e68a59f": "eab072a3c4c32f7244d9586a150f9902",
".git/objects/e3/5eb456279f7c3e24d06f3fd7a823147ccd7292": "342f5b6b1c427b8e07f99aea4871a569",
".git/objects/e4/2f8a5d1b6c985ce5e03a8f5b982a76c3e3bc47": "2fb43ab3a8c8e24256cc3efaa76a0416",
".git/objects/e4/7880cbfb35938f11ec01d4698d13e3f8e1e94d": "7fb55604955d39fa7a09f0eeb0f6a705",
".git/objects/e5/67b5f451bb231652c68274e510aaa15fb4ce85": "7274e20b67fba9c329dbd86dd38dd2a7",
".git/objects/e5/ddaf6ecec6004407fa080aada35274b86a5515": "d2e5bc7733eb69e7a1e6f870ea79c313",
".git/objects/e5/f3e285deeb15970ee3c920288ef1cc15c17b67": "9bf105d83e627a2f232fd29be729c0d8",
".git/objects/e7/e4ac81b207f0549c52d0b7587a9e605caa90ac": "2b1b2abc1e13fc43660a251ab3a8b60c",
".git/objects/e7/f20fc5f5841c33b2791fd62b7912ec6fa1ec1e": "efd349a8be7900e3fe931d084397a6d1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/b218abae5cdf1a84552a62abfd453c6a716361": "b80ffd6f866ba0ea9923455e4ca9fdba",
".git/objects/ea/5f2b2188efb8d351e17be1b43133cfa18c4134": "414598356bc84b1b0d2ad78660273935",
".git/objects/ea/730affcdb90871514d1d698eff63ec32d446df": "7ea341426c13c51a5b21b5c3fa0c79a0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/a3dfb829ee7f2f073ee96d953f9a70e87bdad8": "311d3266c47556c192475a57f10104e6",
".git/objects/ed/54c21f851f2be3b710aeb077b12ab1725f4e50": "a8decf44502ae99fb49370da1b055a33",
".git/objects/ed/6c46c4f7ce0745f8f29d813ee8a63d42e9152c": "ec752bd741352eb6831ae52114d73cfb",
".git/objects/ed/8b0067a37017c420927c35b3782e1bf30cace6": "5cbd2651d8a481970c64b2426ad685d4",
".git/objects/ed/c456075d0b35258347c5a3fa468797cc0d5028": "179a190390369ffa744b0ce6834df041",
".git/objects/ee/e1f1d77b381f0bda39ac9122d604cc3f5b235c": "ca6eab7e0a62dabd683dfb2a2c1b7a28",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/cc49e9f85f6b6ae24d1beb9d5afa4e6861f086": "f1d715a03c07a80a369f6f69fdfc0acd",
".git/objects/f0/7804f7b439574cd7c0de72ff733075ad45b882": "87d5958f1a41982419d5ce4537ff5fb7",
".git/objects/f1/48075e7df9ecd29ba1c226fa7cc8eff1d91024": "bb7ad5ac53810dbd8ad85c574a994bd2",
".git/objects/f1/bdb76b0513d5f5cb7fcaf30f7e3f38492ab005": "d2f5dbe00e6827551dc6261c79e576c8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/07ba0600a014d0dd101a7c34e9315c91be2d43": "e20b163c2f497805cec21c3dc60c1755",
".git/objects/f3/66bd4e74955ef0f0ceac84cea8fc7e55d557cf": "02bbd066cf121f82849de4aab178cac5",
".git/objects/f3/69a363a302405d48b91221dc3ac27ff7e4d532": "363e7c7085f32ac1312bbb5c4eabfed4",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/91b21407177e9e836b5444061cbfe22a91e43e": "8ea851c95312e484ef4eb1fc4c2f2a8f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/1d1b0f7df9dd87535a0e6fddfd3c0ac231b05d": "6129e916a267417b3b55e6b466a115ab",
".git/objects/f7/206951b683cedc93ec183e840bf58ec275b452": "493b7722e6703d1a6db63b4c393ac288",
".git/objects/f7/5ecc89693ab06d4d5c15b418dec248e0d40422": "e7f3bfd39e6c5b7322153aae7d687bcc",
".git/objects/f8/385c7ee4f2c4704e246d8fc98879b5f7597919": "f612dade2abcf8be97b7938cf78a39e1",
".git/objects/f8/3f7dabc09dfc7a71b2d5463b109ac472b3d4cd": "b308f7c07e14902af708c075935103ec",
".git/objects/f8/b5ecb71939f01409e47b17a2060033162a3927": "47d46aae9d287b4540760d25c21f2343",
".git/objects/f8/c862d84674d966f7b585c321c4e1548a57bc96": "ea62ef8b55dfb9044d6df6beffc267c5",
".git/objects/f8/dae3c6d864a3fbc4e0ca1ee359f65bf3a62228": "0ebe3295113d22765ff85a1f465bd815",
".git/objects/f9/661993637202c7eb05aac5cf277c7d410a0ac5": "9387a8ab7cd3fa4ed4024f1efe361149",
".git/objects/fa/09a908f6e745795e34b4db7b9348021f9bd36d": "aa9c91b3b0a0e92ce3e44e5b93ab939f",
".git/objects/fa/cc1df4ca0ef8bde933e2cf4005e49d30777e09": "2f5f9f41664c201886cebc938aa9a5d3",
".git/objects/fa/f50ac6c77266c9549db0d1ec597d1c75e63d8d": "5315d60cc4103b8490f4e2107b7b0633",
".git/objects/fb/7761f613433495edd563a8cfd882445ba14b53": "e23a5c0eb64e79ac4c51a6deb80f576f",
".git/objects/fc/0d58e5d685627330c564ee32dbe431d73d1f6f": "049aa2eac2174817aa2fff90252fe10b",
".git/objects/fc/57360034efa08d9b1f6bb68dc69dab0cf6497e": "6b91d8c61f501526a614c47a6ec93241",
".git/objects/fc/8e5db3a05bfbb6a1fa087462a6a72fd593adea": "12a6b48168c3a4f60548d932f15fd38e",
".git/objects/fd/f711eee2eda08ed98a298454c0239f4b564f43": "62f476f6ee3f7d487f08a3d7e2ae7c77",
".git/objects/fe/ea6a67e292cd47208a3a7b068cd048f623fe92": "c295233a1a9aa090f52e8451b77af321",
".git/objects/ff/329a385bbf1e9503207020cba3df1f4a1479a1": "cd8ab71d1f2935abc70af15fd6ae8e53",
".git/objects/pack/pack-a1971c33675de48d05c5b112c01bddc147c0d667.idx": "7399c3d1e38fb3c8dc497cd43660479a",
".git/objects/pack/pack-a1971c33675de48d05c5b112c01bddc147c0d667.pack": "e10908bbefe4dbe0dad360de555971d2",
".git/objects/pack/pack-a1971c33675de48d05c5b112c01bddc147c0d667.rev": "d25e8f1558795d6dce06b1e6ef900dea",
".git/ORIG_HEAD": "76e78d27c993793703a97f73258a391a",
".git/refs/heads/main": "3a68dea62faf9db3f72e70a01f8bf1c2",
".git/refs/remotes/origin/main": "3a68dea62faf9db3f72e70a01f8bf1c2",
"assets/AssetManifest.bin": "a75efb56d530905f4140e0ec153bc4c5",
"assets/AssetManifest.bin.json": "a372b391d7ff736153a9f346aeb4cb66",
"assets/AssetManifest.json": "863f1a45f6d8a2183fd1e87e9ae3ae85",
"assets/assets/fonts/MaterialIcons-Regular.otf": "274fe253ce7b23e4b6b27cb392b58111",
"assets/assets/fonts/Prompt-Regular.ttf": "2871879765bf3b47537c7122c81fba3a",
"assets/assets/images/aibuilder.png": "20c5370bb880ae9b41bee46e87e86da3",
"assets/assets/images/android_icon.png": "16d76bcc1b7c452ee1a0d10bd9f3c9a1",
"assets/assets/images/apps.png": "3b4b646fd409cb870a135ed4b739e890",
"assets/assets/images/arduino.png": "175f57ebc2a4aa2581ad4baecc5560e2",
"assets/assets/images/automate.png": "9ad2189e84c8732659b3b3d161dee35a",
"assets/assets/images/azure.png": "987141c7fb596a20430dd95774110fb1",
"assets/assets/images/bi.png": "a5a90dc11e83e4b4eccaa252c5975ce2",
"assets/assets/images/c.png": "e77435780ae86e1edccb4dab117dc167",
"assets/assets/images/co.png": "6fd7a8f2364b3a33c14e8f6dc862f710",
"assets/assets/images/coding.jpg": "8124bcb51b09bdf56c71135199ec76cf",
"assets/assets/images/coding.png": "8d605bb677fdac557b16b3e36cb1f4fb",
"assets/assets/images/databrick.png": "5dcf9b93cd17079cb650bc0107275ef2",
"assets/assets/images/dax.png": "b83c229bc83cfbb2b144ff7516eb4846",
"assets/assets/images/desktop_icon.png": "510deea38b7862484a8e26586f362152",
"assets/assets/images/firebase.png": "c9e1c7a50faa42d1583b54038aac3fae",
"assets/assets/images/flutter1.png": "d4b64d7bba6e6d281a30d110aff2be40",
"assets/assets/images/forms.png": "cd10be49a450e9891a58e429bf68957b",
"assets/assets/images/git.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/grafana.png": "799da75bc8e4675f6990a09e83b04985",
"assets/assets/images/gx3.png": "861bf2cac5b9bf4102a814af3e82ca13",
"assets/assets/images/img1.png": "7963516d4b31a0013cf24ea22872c26d",
"assets/assets/images/influx.png": "1050bfe6a1218d46f27a01224b859353",
"assets/assets/images/influxdb.png": "3d8d1e59885590c7f4b114b5f0ab3598",
"assets/assets/images/ios_icon.png": "fbd75fd6af3e3ba5c1277b76803c28e7",
"assets/assets/images/kafka.png": "2257cd9aac8274fb0adec4d936f908af",
"assets/assets/images/ladder.png": "da9dbc96ec374761f635682a6e058aff",
"assets/assets/images/linkedin.png": "b2597cd80c8da3f8d26d0c1bfb5ed71d",
"assets/assets/images/linux.png": "56974b4a61f4dbbe624cc6ca69b93b60",
"assets/assets/images/lists.png": "be82d37d32a383873ae1e9695e8c8d2a",
"assets/assets/images/logo1.jpg": "fab9f642c1a3262c0f1f2f3ff8a24529",
"assets/assets/images/logo2.jpg": "d82a8352fc50725e34eab7fc61e5a978",
"assets/assets/images/logo2_1.png": "177c34ef2beee8a10663d401f5462c53",
"assets/assets/images/logo2_2.png": "f71660a4aa2889ec345c84b7e93b16e7",
"assets/assets/images/logo2_3.png": "f6e62f69dc70465c1022c1323e4aee99",
"assets/assets/images/logo2_4.png": "7e722b64a5da1327ef78e5ccc8746443",
"assets/assets/images/logo2_5.png": "b928deefc4f7dca28c741fb7894eac95",
"assets/assets/images/logo2_6.png": "1cd7d95b8d35bb72f3b48a546e83075a",
"assets/assets/images/logo3.jpg": "41024e422db54dd7b6ca96ce3ec9d507",
"assets/assets/images/logo3_1.png": "56508c694bd9e7627f43362b7e5965a8",
"assets/assets/images/logo3_2.png": "3f4ab4aea0d5e0d38b0e1121fcf110ed",
"assets/assets/images/logo3_3.png": "df3a50b39dd8baca996a76f7fd2502ed",
"assets/assets/images/logo3_4.png": "7fa148171c40aca42bdebde0c6deb738",
"assets/assets/images/logo3_5.png": "53f2bb1fdf84e66244605d217bcc2f94",
"assets/assets/images/logo4.jpg": "15d42922ebc26f22937f7dd85e11c913",
"assets/assets/images/logo5.jpg": "f037f9c59d48a6c1f1581f6f74ecae44",
"assets/assets/images/logo6.png": "2cbbe7501c4034a7b23e23a33992a6cf",
"assets/assets/images/logo63.png": "090ad42d66b7be31cfb67a7df0fd69fa",
"assets/assets/images/logo7.png": "5c91e0c3b110a8a2b0dc6e28ed412d1a",
"assets/assets/images/logo8.png": "202f6d5aaef95cb935aec9fe4ed51cc9",
"assets/assets/images/logo9.png": "3d9962ccfe5ec1216784e9430bf5be0d",
"assets/assets/images/logox.png": "78f2423dd3d897d25b09b4a5f86e840f",
"assets/assets/images/mqtt.png": "aed36f1f8e5215ec2b462a559d31684f",
"assets/assets/images/oracle.jpg": "57386ccabe3170f60832790bf8fa9222",
"assets/assets/images/oracle.png": "fb51625832f97bf7ee7e2b9dd9b512c0",
"assets/assets/images/planner.png": "fa24895efc9c6f720a12d66372ef8048",
"assets/assets/images/pycharm.png": "5da70323336e660f903eaed202688082",
"assets/assets/images/python1.png": "f94eb89e1da1f5b2572332bfce032b3f",
"assets/assets/images/qt.png": "d492d80abcb4b7209547f470c80b7fa5",
"assets/assets/images/roki.png": "cb2a60e15a509a1adfa7917e1f9f68a4",
"assets/assets/images/sheets.png": "f244b651ac890f313b1439011ba3bffb",
"assets/assets/images/siemens.png": "68d892205b1c998a70fac03b3aef85d4",
"assets/assets/images/spark.png": "5d27c38ae6e215068125ef2f3dc3874b",
"assets/assets/images/sql.png": "2b5af72f6c5d772b7dfc9da531828028",
"assets/assets/images/streamanalytics.png": "62f8cd70c2e950282115c1ff7bd2ccaa",
"assets/assets/images/vrep.png": "10bab37400d1bcef8f227d37175c20c3",
"assets/assets/images/vscode.png": "c674346f730f23f63282c24423697c98",
"assets/assets/images/web_icon.png": "4a817a9e9f2e49e52583f172973d4d3f",
"assets/assets/images/windows.png": "5de5ef2789a2882028d7eda1303b82ea",
"assets/assets/projects/4M.MP4": "e8f2b2b471f273999af0508b77669d9a",
"assets/assets/projects/4m.png": "d6b2eadcf22c8fe37e2d72f064b684d7",
"assets/assets/projects/4mimg.png": "8da8b7bec739984871877771af9587d8",
"assets/assets/projects/5s.mp4": "b391ce0ece6ff4043e2fccb8cd2ede61",
"assets/assets/projects/5s.png": "945c279b9adefdc0e71d14f79693670e",
"assets/assets/projects/5simg.png": "4537247899c1b0b7b7926a047537d1a6",
"assets/assets/projects/access.mp4": "8f8277519093d635e967169516a0b8aa",
"assets/assets/projects/accident.mp4": "11ec7b33b3b9e4b9d8b9f2f9e323722d",
"assets/assets/projects/accimg.png": "e60cec5706f50d54b1cb364f1800c1f5",
"assets/assets/projects/agv.mp4": "27eb2b006f443091ca9482b28ca066c3",
"assets/assets/projects/agvimg.png": "1f2152c1e160604e09557d90fc45e37e",
"assets/assets/projects/ai1.jpg": "c69f93ef4e9b59706ce16d0e65743f46",
"assets/assets/projects/ai2.jpg": "2c204f07cb7e5ef0e4a07c07ab5a8ff9",
"assets/assets/projects/ai3.jpg": "5073a0ec69a493a9868ae181459f781f",
"assets/assets/projects/ai4.jpg": "6674b1e6e6cc48d98f59db8125e34163",
"assets/assets/projects/ai5.jpg": "ca102c603e03df8ade7d04cbb4078a72",
"assets/assets/projects/bi.png": "b2800844e0ba2eeb4201a987c15a8989",
"assets/assets/projects/booster.MP4": "e9ac9fcdf2ae387ec88c0f642fabcf30",
"assets/assets/projects/booster.png": "69af0a992bfbce7d823e611cfd6380bd",
"assets/assets/projects/boostersimg.png": "adf4fb8436961b892a2f233fb48c36df",
"assets/assets/projects/bosch.png": "f6921128286450b8e13146c3aa2174aa",
"assets/assets/projects/bubbleimg.png": "276363221863f7edc43c1988b93f91f0",
"assets/assets/projects/bubbletest.mov": "294c0c3d069cf97485338b17ed43f4b5",
"assets/assets/projects/bubbletest.mp4": "3d484da534f18a4ab05b0613285f7d40",
"assets/assets/projects/bubbletest.png": "69af0a992bfbce7d823e611cfd6380bd",
"assets/assets/projects/C.png": "dcb140cbf5d7e58706b22362568227fd",
"assets/assets/projects/car.mp4": "985587b41f5576fb221b341ba6f5f77c",
"assets/assets/projects/carimg.png": "a8fbeeb69b006a79e8d9f9eb0bb4ea7c",
"assets/assets/projects/coding.jpg": "8124bcb51b09bdf56c71135199ec76cf",
"assets/assets/projects/coding.png": "8d605bb677fdac557b16b3e36cb1f4fb",
"assets/assets/projects/daikin.png": "6abfc63a0c6f804d246645152f4ae94c",
"assets/assets/projects/dashboard.jpg": "eb5320685e1a0207d4dcbcf0cdde50b3",
"assets/assets/projects/detect1.jpg": "e431688e86177d6c9f248d40b5ff28d7",
"assets/assets/projects/detect2.jpg": "b0b156548ce0ad7bf5d24a994d933368",
"assets/assets/projects/ecr.mp4": "a40fc7388b546666d2460e3f52598b6a",
"assets/assets/projects/ecr.png": "fef206b347700a601a35decfb2a6f190",
"assets/assets/projects/ecrimg.png": "8ba235e16e03d59bebb3820bef674b31",
"assets/assets/projects/edar.mp4": "a7b951d0b98e26e95fdb30704312237d",
"assets/assets/projects/edar.png": "1c5e0c34ebbc0d63b24fd051d6de375a",
"assets/assets/projects/edarimg.png": "13540da9ca1672dbee1395e06ce1a8aa",
"assets/assets/projects/emailandfirebase.png": "d6620c0165f7ffda4a992a494edc6c24",
"assets/assets/projects/faceimg.png": "0ec6bd32f5e9138361b1291374ded1d7",
"assets/assets/projects/fibo.png": "7c80d418f63a184927de208645938899",
"assets/assets/projects/flutter.png": "9ceba8cfd9db18f7dfd8be50d46f7aee",
"assets/assets/projects/forms.png": "0c47896d771acaddb5522f7d6bdc1027",
"assets/assets/projects/it.MP4": "c338c07a7753dda4a36bed1d2944de2a",
"assets/assets/projects/it.png": "1fbac6a690a164067382e91cb1f1593e",
"assets/assets/projects/itimg.png": "c9c851c90b6d05e40ad5a645c4218ba6",
"assets/assets/projects/label.mp4": "83470dfead9c83993d5ee5b6961c4b65",
"assets/assets/projects/labelimg.png": "af11982abc90f3971df1754b17a1fb7b",
"assets/assets/projects/lane.mp4": "c44b59dd653c22dee7836dc461b1df51",
"assets/assets/projects/laneimg.png": "789311ded0dbf98e98ab8f80b152c0d0",
"assets/assets/projects/lists.png": "520154d38e46b11b553e08ff75d27f8f",
"assets/assets/projects/loginimg.png": "b663ec7b2826b61043137485f6a3fc25",
"assets/assets/projects/meter.png": "d78b22324207d4fdc60b6e633b50545d",
"assets/assets/projects/mitsu.png": "b99aca6f9c7b5c30fa30dc10627f8a30",
"assets/assets/projects/msm.mp4": "a425c53ec2f0a850aeb0568f34ed2372",
"assets/assets/projects/msmimg.png": "b98f1e7f3b72fd72be027656580803b2",
"assets/assets/projects/mut.png": "b60a4a9beb1f7c3e0315935f7b7e6653",
"assets/assets/projects/NewModel.MP4": "4d18e60dceefb5d68137c6e39a761da1",
"assets/assets/projects/NewModel.png": "28129d5e33f07b4957b9d93179c08c3b",
"assets/assets/projects/newmodelimg.png": "71c35921c63f4eb4c006bf05c4a4cac1",
"assets/assets/projects/outlook.png": "928023ff3989615feaa18362854f1afc",
"assets/assets/projects/pickimg.png": "d3d525562ab3f1e419dc4ebd1e8b1576",
"assets/assets/projects/picking.mp4": "ea0c238eef3a1c9315c512db76a6586d",
"assets/assets/projects/pincheck.png": "b44495620470000022434dba1d599e84",
"assets/assets/projects/pinheight.mp4": "7c43e56aac012a4d8d510b199f8ab26a",
"assets/assets/projects/pinimg.png": "0c5b0c65bc3096a95ecfc8e3cc0d9659",
"assets/assets/projects/planner.png": "05b253d6fd086eb461947c5a8355e490",
"assets/assets/projects/PO.mp4": "c6c5fd438c343bea8d5710c0f6e43cc4",
"assets/assets/projects/po.png": "14cc1a7821eddf4e279672e9ad1bff7f",
"assets/assets/projects/POimg.png": "103df156663ee34a20503c84d6a2332d",
"assets/assets/projects/powerapp.png": "9d9818ed44d060088e021a4a55369bca",
"assets/assets/projects/powerautomate.ico": "1a3716213f41c1b8d77a3c50881a84c3",
"assets/assets/projects/py.png": "08f6cfdd9a43b1a9b72793b42d21b13f",
"assets/assets/projects/python.png": "a9e58974ef23ffe5eb9bd3bbac0b5645",
"assets/assets/projects/scap.png": "bdd86cbe1fce4b1f1d787e91276fc727",
"assets/assets/projects/scrap.mp4": "36928bda10bff7666eae028e798661f3",
"assets/assets/projects/scrap.png": "7ff3819f5eb147cb99e50bc780714df4",
"assets/assets/projects/scrap2.png": "359a2451f9f9f37744dd3ec96227e87e",
"assets/assets/projects/scrapimg.png": "4fdd0f27664b896684d9470fb3f2e816",
"assets/assets/projects/seatbook.mp4": "cb78ed9a0958f86fdf3832dade94501a",
"assets/assets/projects/seatbookimg.png": "a796079d1f81ce18c8989ddb19591aba",
"assets/assets/projects/sharepoint.png": "184df60f893a8bfd8e6610998a1156eb",
"assets/assets/projects/siemens.png": "b0d98927b39bc6a056d4e9bdef258943",
"assets/assets/projects/signin.MP4": "fbc07575f2af81e6e6613abe79447b8e",
"assets/assets/projects/smartaccess1.jpg": "376e75938726a2f13a3f648a633b0451",
"assets/assets/projects/smartaccess2.jpg": "6f6ebe46b3af618c04ca956b158ab0a2",
"assets/assets/projects/smartaccess3.jpg": "b4f1c25bbd536e5b8d3c4b770f6d1c1d",
"assets/assets/projects/swim.png": "540f3942f7153ff59ec3043fafd04b09",
"assets/assets/projects/swimimg.png": "b099e6224332703fa0a6323e1973c568",
"assets/assets/projects/swimp.mp4": "276ac59b8f1d359f6a30f173552bc754",
"assets/assets/projects/swimp.png": "a7ecfb43a8f2ba84f7e873cc5f525d9e",
"assets/assets/projects/tank.mp4": "5b2b0f4f49e242f2293830546edc5998",
"assets/assets/projects/tankimg.png": "8a028c01ee85bddfced04742eb6a84eb",
"assets/assets/projects/teams.png": "920a7a591ba7dcb61e1aa2779d5ae30f",
"assets/assets/projects/todo.MP4": "8f7010102890fb29e28f0b78420cdd53",
"assets/assets/projects/todoimg.png": "185e63364b71ef5f2536acdb456dcb06",
"assets/assets/projects/toolimg.png": "27da4c6e67a106fc43cc4469c9401358",
"assets/assets/projects/toollife.mp4": "6ffe1aee7e5f1c37c5cceaaad4e2a4c7",
"assets/assets/projects/toollife.png": "7ddfe72aa47f8f700b1088144c3ea12b",
"assets/assets/projects/tools.png": "2d74b6576ef54f93e3d1b680e3fa044d",
"assets/assets/projects/trace.mp4": "2637fb013a015a060ec0c856902104ec",
"assets/assets/projects/trace.png": "b64ec02c25e99fcdc91e334980da71f9",
"assets/assets/projects/traceimg.png": "c28212943eb0cde172d83956fed950de",
"assets/assets/projects/training.jpg": "d40de1da78b098a22e86ee1cf409b7ff",
"assets/assets/projects/ui.gif": "eab2853cc202c16378f932d587fe1d0a",
"assets/assets/projects/werbi.MP4": "2abf69700755f2c80eff6877afc8a7d1",
"assets/assets/projects/werbi.png": "028e55c62bfc518f8e5cad1c8c32ea6d",
"assets/assets/projects/werbiimg.png": "7346e588719d9786285dda085ca96284",
"assets/FontManifest.json": "43a3dd6dce2377b94da42bcd3a5963d2",
"assets/fonts/MaterialIcons-Regular.otf": "274fe253ce7b23e4b6b27cb392b58111",
"assets/NOTICES": "78bb98da328aac01996d394e4a342229",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"CNAME": "bb5afcfc8c9507ba7f5ffcbf52387b0b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "75572b72545aa32ab6fa95d3734afaf7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo2.png": "14b6d8800febe3c31ea87d98d0b86342",
"icons/logo2_3.png": "f6e62f69dc70465c1022c1323e4aee99",
"icons/logo3.png": "177c34ef2beee8a10663d401f5462c53",
"icons/logo6.png": "2cbbe7501c4034a7b23e23a33992a6cf",
"icons/logo63.png": "090ad42d66b7be31cfb67a7df0fd69fa",
"icons/logox.png": "78f2423dd3d897d25b09b4a5f86e840f",
"index.html": "825811ea5068fbbe62a9e861b7caa1cf",
"/": "825811ea5068fbbe62a9e861b7caa1cf",
"main.dart.js": "e705660855e8a6afea428904179080df",
"manifest.json": "a43b48cf1e6677287f4d852ea8d1212d",
"version.json": "03ac4cb9478445346aaa58b867540bb2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
