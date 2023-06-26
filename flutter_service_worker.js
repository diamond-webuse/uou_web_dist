'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "00a3f6fef98b5e4840cfa82c929c16c1",
".git/config": "e6a6737194c2593105e167eab64eaa04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "eabb7b434558e2062c75de0ca15928ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f024ef936ea18597e7defaaff24b552f",
".git/logs/refs/heads/main": "9693aa47ff05ceaafa69e3dcc81dbb0f",
".git/logs/refs/remotes/origin/HEAD": "ebea75250c6f340c8916483f38245471",
".git/logs/refs/remotes/origin/main": "a12ad8311b026d57fab23abe00bb1206",
".git/objects/00/4c8cdba95900476f3c2d9a580531efc4b59cd1": "a612ae99f431f734e42da33dfcb28c90",
".git/objects/00/a89c70292bb26669ad766ce3b3b9d3e0cfc4e0": "8c3b5c0addd3eafe6a5ffa7d39fe77e4",
".git/objects/00/bd7f74750648e433a7f58e0b585368e23c0b56": "67e6c11d4e6b7ca7195fec6f7feca2ec",
".git/objects/02/462e603b65ba7314f39bb480fef804a321fe49": "2e462c459e9885b5790d20b0b6521ff8",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/b41daf8c1ffd59442e14bcbb550cf4b2495b07": "d992800ad0e1c7a38fd9e6385828a62a",
".git/objects/05/4355a6ca52d1d350acebafb4ec109cd859f307": "8ce413d3d23e848f187a3ba8b68d44c8",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/c12666fc81a2d56bc1542d68e25b1dcd4a247b": "f44f577a7739e218df35377862b5d310",
".git/objects/06/d5dbc33aaa366cd0a4f68e3751deb84d44f7dd": "d34bf7ac6101bb7aa17bc64170c2c90c",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/2d44c7613708c19b5c4018b0536754cd09f17d": "9fd8daaf12b92b1f4f61e4da024c1b77",
".git/objects/0c/c254dbaf3a1f46483e007a6b35922d3ef7e3ac": "61d7aedb3430d7e718483075f6c3aef7",
".git/objects/0d/ec38dec4a3f8d0b4f839999385f26c5722b491": "7cd50f26fe4eb3ba0329b4dff0e07cdf",
".git/objects/0f/02fda79a5e1a774ec226cc3e90d9210641a4c4": "c584d0d2715ba223bc5cb82fce97a7c8",
".git/objects/10/4944c4be989e025e793e9d93124c7c7e6f2097": "8946cde90f0a4597a33e2d7bfd010e44",
".git/objects/12/0936b1deaf41e36e0ee8897025f1ca8ba38234": "8204e1448c9d65c932b0cd587bb80bcb",
".git/objects/15/7b02b2e49524d0d9781e7c4123d5b1ec39686f": "583e4a4456c4b6f800c357f7b1c93d56",
".git/objects/18/fd1a4318635691ec4f5954eba1eef828bcf9a2": "3748e022a565623ca18c5d2e5ce2d181",
".git/objects/19/0f0420f9d2eb61f604ed2212297cc5bf2f431e": "9cf90cb1d9a4bd9c629bddb28e245542",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/3fbf538ff199f8bea32e497ce63c4107c3cad1": "91c896c358c5974e69ac912f3f4182d3",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/f76753e5319b76e6f8c6c82da95ffddc69810d": "7ce2f5ec2a8074b8e0f93727b36c7a56",
".git/objects/21/012d283d48902e7632ee07333bc7be047d8a49": "985000ea297392f829d1fbaf42fbb87a",
".git/objects/21/e67f08900092c58f43f620b91b9526fe6e057a": "2de638c9d57706f6f1e9966f7ee6cd3f",
".git/objects/23/5bedfe4076122b3b6deec102f1b41892f462bb": "c49491532bbe4f6f917e81eff302293e",
".git/objects/24/1155b9ab7ce6c81369c0ced6bb876e6979b645": "993bde4bf381f38254c4af6e7090585e",
".git/objects/25/2fb5179eb2787ca4331d0de664fd583b5be06a": "3f91b967b4931a45238590aebecee06d",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/27/7e52c418017663af16a6e273b55d28208ac191": "b219c209a99ceecd3fafd298d95bd71a",
".git/objects/28/b912deca53b926409928069f84052cf8959d85": "4ce7756cfb27b4460119504e9fac1af7",
".git/objects/28/e69a00758eec82667cda148b7a884274f08d1e": "821f47c541cd8015b2a6c5d48806cacd",
".git/objects/2b/644017f689ab042728ebc259d452ee8d1543af": "fab7b49439bb8d9de528735dedf7ca15",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/da03f87fcfb7019a1e439b2001a3539e166c15": "47b345fd0c3b4528b766736e0366895b",
".git/objects/2f/1a62806dd5a9290e8fc6fd5d8c96dfad0af83c": "e31c91206aab7758fccd9a905bca4846",
".git/objects/31/c337228e56cf4c54c3ee302efe42088e11bec3": "239a1196885f7b0914b5ce1008aab81d",
".git/objects/32/ad358108ed92d78f753d6ad444e80714daea01": "45eb775b194546276ca330907e325121",
".git/objects/33/9bca63891ed21bd198bd5cb2afb7face4683a9": "e2fd4ec3769205e7c5d1fd3851b9de61",
".git/objects/34/563e1fc4e97a8bb6b01c204193cd8cefb226ec": "2091982f49c640b8b22a385185388587",
".git/objects/34/598db64c8aac4e4a76b6819bf4893f95d4a25b": "54e4ac3f0f2e118b722ce9aeb3498b68",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/9a6b75575d9373971a2773224f7657f9feb7e8": "db0bdf1319caa27dbc929be8d339127f",
".git/objects/36/4dbda96fcf1b486f29072d413364014e96bd3a": "31044db10f11d47fe738d7989e1c75ee",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/cbe20f240101a12da14dcb8ccf39c5ed35780e": "f0f6c3e6c046e378dd45ac49900c672a",
".git/objects/3a/d47862250b8748f1aaba660f34ad4bee9ebb06": "08a93101937ff9da28ed7663dce12945",
".git/objects/3a/ee15ac1ebccccdee631708fcbf8f02344c654d": "2202407de2a94cacf53016821f2d5e97",
".git/objects/3b/4ecc1bb10400bdd66f526b986a72e043e66376": "42fb554d6d278bb65424f3b9f30586f8",
".git/objects/3b/66ef9a484694a10ace20e5a7fb241c6fabcb81": "44552737261a100029d9d679d39f29ae",
".git/objects/3b/6abb30da57ae615e5f2eaebfa20aa7aeca6974": "75ac063087ee4fb3be25afd62c371c75",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/8325afb921cc1ca2685069102c4f6a1fbc47d6": "86ae40b07913e8db8c22645c558b9e7e",
".git/objects/3f/a3755b6511817348517db9efd009b68b2e4f14": "f0057956b7e72a5182737d0b927e2f63",
".git/objects/44/a1db3c33e80ec3ba77c2da40b5e9d1df85271b": "3f7621b9125b7c66d4c4acdcbe25b9d5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bb4d9241d29c800d3af9bcacbb2c1efa22ba6f": "4aa6ab46138e2acfbbe90763e444a898",
".git/objects/47/2788b18095d222696aee9ae49c3b07f137d9dd": "9a786c802bd71ced476aa39dd51f31a9",
".git/objects/47/df3e54cb5832ef3cd848272ced699aa21df199": "27389af63b13d3d31ddc51889124e64a",
".git/objects/47/e1b393a2786e8a9c01bb5ed2eea6344d168885": "7cdae39785e4b4b0c94564c60f0e8980",
".git/objects/4b/2b89657fa91356f04313ee0fa70cbec66f6495": "ca85a910477fb40287f98dfc02cd3cf0",
".git/objects/4b/d83336e0193a3298c82acfe7e79a1850728ace": "99dc1efa3def655fb009a8bedc4bd48e",
".git/objects/4e/3734b5e17ec060316c3bce7bb43066bd6c88c4": "e1020b7cfda6956b8b445d0e273c0bf6",
".git/objects/4e/38f57863c1017e60432807a0ef9040e89ba971": "8664c3dcc8ebef637c4a3474a24c68b9",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/4bf042761749fca26ae8788f896fd7f0cc4148": "d0ec1ff28aef3ba58ead7dd76d6e0d63",
".git/objects/55/971fb7496894e6eef75a709622ecf47dd11ef2": "13a25d62b8d1ad8ad704220cbeb931b9",
".git/objects/56/f24258c2b47fa6dcd5c2d8c7731f0d086ed228": "b72dadca04cce6ec1dad7a448175fe36",
".git/objects/57/8ffc38e206aa5bb2f4265d1c7477e749098f24": "b1ed51ebf23ea48d67a19ce3d88ab994",
".git/objects/57/ce51b8af063c4a78989a7748865b6ba46b67db": "3ed3a3064916174abc05dcdd4f2c5f6c",
".git/objects/58/b68fc32e8d605b38cbd033a34e52ea35a2c05a": "a735f20b55e47e753b607a7bef88089f",
".git/objects/5a/0e84c27ba620a6f235efd9f334038e6caf2a6c": "846572053c7a3cae240d8f5ecf7edc92",
".git/objects/5b/0e3f1b8b26598f7517d341818e31d1bb82d1d6": "2dc6e62000f84a6fd6d3a40d4d2b95f0",
".git/objects/5f/f5c2cf1652481064e50d9716de0238ef95065f": "937c81c3bbd2029707d6b0efb5d76c75",
".git/objects/60/3ef50752e666584ed2cdf644444e3d02a9880f": "4aab003ebf6644424cf6fd22312b6b38",
".git/objects/62/0083969b9ff04779a03afc074818502597a2d1": "6b7ebfc4ff3b2b83eac2efc543862b0a",
".git/objects/62/985f039dc204b068ae888009c2206bc01a84e7": "5b564c214d315073fe67c5dcb24f666d",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/cacee56e9bdb3a6122d1e9570d0b12b3ecd8e3": "0fd5fe9778e357278bfb848ca8e8ac72",
".git/objects/64/e2862aa33cb4793eadde58b765bfd5c4413bcc": "2f7c78e3ef5aa042c2471510f9129210",
".git/objects/65/aee888cbb095af9310543ccb213e1e6b552a1e": "893a0af1b19eb7fc98bfd91785a55adf",
".git/objects/66/145a377a84af13ac159860ac92be164ddbb39e": "258fb8d3206dc4c51b74b29b050885de",
".git/objects/66/91f4e37f18bd36f74685b818f52fb3506712a0": "581e82a3d9ffc8b8a66ae698676a70c1",
".git/objects/69/3345a07d7623f19e58350c03c3585ee2c36ae8": "c9db1fac6debb008209539c0bb2021f8",
".git/objects/6c/e9ffb2619f6b05c67770e2eea40624557bfc79": "f5e195cbccc06212443286763322eafd",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/73/8f8bf563a88e865272c7560035ef05c8d2e56a": "d2ba7451ed13df2707b231b0a3a20f23",
".git/objects/75/8251f0e0e2a4b74b1b9c446692c36e7560c9f1": "1e952384ee5d8f0152c54b96b3049795",
".git/objects/78/90e70fb3fd20319648b02900504d55e867abd0": "0e147d80eb112231a3c8aeb17780674d",
".git/objects/7d/8457d71801be8467b6af4656827ce9911f8082": "cbcc08513ce7b4ea0978a77996639238",
".git/objects/80/0b7f7945ffda11d9231de96d893434d63ebc85": "f011437f19f22684a58ab8a9677ffc9c",
".git/objects/81/1d880f79328497b5f0ffc8388fa17ea5f59272": "2992870a79f63e84f2471b4bf743c15c",
".git/objects/82/8c052dd87c85daffafa9b59a34371b8579fa3a": "17d5ebf43d48e2ac07545e68ef382a61",
".git/objects/82/9b2468f30390a1e47e17d51c3d5277b1be29d7": "ce568183ce2dfcc3b85129741547a8a9",
".git/objects/85/6b6db6f233c0f150777a20d13588e92031b2f9": "d1eec563be80b7143073cfc9ddd2b03d",
".git/objects/86/6969200828148e233cc408ad971e611f90f7ab": "57ba36d11300ebd13de93f56339e2bef",
".git/objects/89/f60fe2ce302d6de80fb398495902e55fd65363": "8bd1458178792ae2515738aff2de1447",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8b/78cc53230606a85b53785e81aea373ecc632da": "9e52c9865d758846d58f7df3783b1fb0",
".git/objects/8d/faf64a86cf2cfb7fe69c8f5164991459fd4440": "a7e4caf81ecaf41f0b8b285a562853d7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/f676ed706b95a132a13c4c660d57def2f8f34e": "489ffe8ae1c28f1f682a9ce6c12adf8f",
".git/objects/8f/3b371be00816d05a561d77725a7cc857b3838a": "44c44e7c20f28e79359998ecb129d1e1",
".git/objects/91/0536738f49348ce31c549d035fe3142ba59641": "d14790bc5ab2c4b38747c98a7a60e945",
".git/objects/92/bfa3aed9255fde4f5bcfe2c6cc4160c3fbc6dc": "47728507cde9905c9eb9ca4d206b7cd6",
".git/objects/93/51b2f813870eb79e161978d7d1b421b0216f85": "e20f4c7dd2ea4e1cec62d76502fac335",
".git/objects/97/b223abb4717a4116d6fb0d591eb1f74cc257a1": "2d2ff9424cf33a355138cbfd8ffddc7e",
".git/objects/98/1403d224fe9f7fd9555bb4d9b738834fc87211": "b5c92a2de8ba3f440f66638bcd378605",
".git/objects/98/ac231093f3dc0bc18459c3393689c0b3423790": "dffd30e12f3ccf988c35eb5b9ecca7a7",
".git/objects/9b/2922f69ae0a0cd271f829c1558eae8980b228f": "3893a739b27e0f5ad70d3b7d47784903",
".git/objects/9c/da90f61979007706a8e9d9462621386678c92b": "7c681eec4bc06e6e363dc696ac7c826a",
".git/objects/a0/5f7e8840c383433e2c670855ed074ee4711fc8": "0f25e07ac8b72d2e302f1063bfdce0f1",
".git/objects/a1/5b992385fd3a7a2d4f0a3ad7eaca71080f9a4f": "9cd638e10d9f57ff13e9b0e40b657fcf",
".git/objects/a2/d29bd4d07e99b0c4d8e0ed24d6ff6ff4e56c45": "211d11b3ed8f22d3b3561b93ddbe7923",
".git/objects/a4/97edd8c60653b39ac3a09e82f6c2248e87bdfe": "9a7d0bf6d9eb8c069a865cc7df578475",
".git/objects/aa/9f1d22028b4a0cf5834a7e20d46ee93d65e0f7": "c03c175d0894c563c7f32160e301e98d",
".git/objects/ac/a2392a84917ef00a0a529504bea448eac27ebd": "36ebbdd827972f06ada9dd0e24567587",
".git/objects/ad/bd09c59aa4dda708715caa046c859db9575670": "62bceaf10dc636a8e7de6a69d61907a6",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/095e0566f6c1d9396ef1d8c29072b692caf2f1": "7380559e89f580b0f026de9fa0bb4f8c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b6/199b9922df45d7cb34db39aba505f80f9fb32a": "01456edfed35b2467441bae327eb5d5f",
".git/objects/b6/d2dbac023612d70090cac7ae062dcf84e1b047": "18702a432bd676cf5ea08aba56b045b2",
".git/objects/b7/24734306c3e81a132b4dbfdd17538a785e4b1d": "d3fa567bece95c73d09d9232e6ea0d5c",
".git/objects/b7/ac35deaf57cc2c108d6fb0583fd2eae31c96df": "51d77fb27122e5111942ca7ca59eb94b",
".git/objects/b8/d4fa56a034d3839d514dd82f4d84219f2f3e7e": "96c3fb145ab926dc1a39c48ed43bd789",
".git/objects/b9/76213a5e76f7351440e531ea39ae68f47d8562": "cb834b1f4c09f26200feabca9fdb0fc5",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/47568b95b3c3dd8a6c29c18735315d82e7239c": "fa3b389cd22a42d2de4d4d503064cbf3",
".git/objects/be/c19206e25e70738cb182384f6a88641b9c5371": "16e305972c3a83fa5a0cca654943a365",
".git/objects/bf/7d1e8e7363cb7104b0b4c3f5e0fea85acbc1c3": "8ba1713cfc7187a1f0b7f12d722e82c5",
".git/objects/c0/2d39b1dcc82e691ba80b0a827314871da848c0": "e6f4e9907ab8173c32527ccf2bc535c4",
".git/objects/c4/47872cda2c647467b38971fcb89a03046387eb": "ea935066bf3f8018378d04905e13ef58",
".git/objects/c5/9bb58fc5923710a51078629cb1c3cc9b80362a": "aaddff7774d6b0d4522867b9df8ffd0b",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cb/eb977c52ed1589ddaf3e1bb2f5c5ad568a6743": "93c386c4e590d36f65521c64cca73c4e",
".git/objects/cc/1734f25f97fc391c04460c5e8cffde1ade8711": "3d40bd8babbc65d4245ffabe7523efa1",
".git/objects/cd/bc5030b7f5b8d028000433a610c74e1c35a48d": "fefe96b6132acd711d1d7752572d6f83",
".git/objects/cf/6110942b94373c772c79f34cd4f395f9065165": "8cd2553d560bd09fd1fb4e2426149f71",
".git/objects/cf/9ab2411a16c76633b2abcb907b9736b0ee082f": "ea1103ef458b6a3622ecd56e2f3f4234",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/5f0b48719af43ebe7ecf6e4f5047d6021e525f": "7c84f169ae3a455fae4fa11cbd57b8bb",
".git/objects/d5/05a0639e9e7e9f99029cc1cb2ad7e501d9c07f": "20fe6a6c411c7f2337511fb2be7e1984",
".git/objects/d5/67dc1f4ee28d966843452425761f69f50473eb": "c3bb4bc998459d2e42270313be81f71f",
".git/objects/db/382a449d992a7bb59f0a59ce529282ee132134": "69db1e36c42cbdf68e3cc7742a252749",
".git/objects/de/08d33b9abb404c8eefb57ea3eb4f09b1ef3f7b": "da575ea2a0b4fbfbd92fecf092ac0db9",
".git/objects/de/43bd32617942970ce4bf85a9d5c2626cd2ffe6": "85f6d8b0a0710a26490d239df9c3288c",
".git/objects/df/47d38da7d52cc02655e46bd2b09ba25e22da2d": "aba5ad14f59dc08af2ba3a5e6a3ae9bf",
".git/objects/e1/50a21d7b5cf2bedfb4a129b884416701620c3c": "9a79c23877fbcf4e3cf52cc3eedc1be0",
".git/objects/e4/065293067cf03ead03c781c5dd982bbcfc11d0": "28423273e7c1d9fb91fbc9d418f6eeea",
".git/objects/e5/87db87cbd9bf33dd47378294cde2e5f79573c2": "39edc7442da29bd1d0ac4288c39100ce",
".git/objects/e5/f7ab5e5645d7d27518a6abc65f60c43349431e": "b975391ece89008b1593cc8a27ac2cb2",
".git/objects/e8/0a562b02397f423d052586717e1cca64186182": "75fd8a8de639ffbf2f644d975cc253ef",
".git/objects/e9/1e35ebe9947d4bda33a6c0208d1c85fe7b52d5": "359021997cb6cdbc15be44660cceb8ea",
".git/objects/e9/9aee48c6fcadd531628bf68b4c6925d4b5afd8": "b5dd6bf34e82599fc81a252a157f4245",
".git/objects/ec/0ea01c2a2df0e142dad769990763933b063d8d": "578dbbcbb2bff5c6de22cdd632b863e8",
".git/objects/ef/bf24cefa286732fe4ed57ee0e55520e1986eef": "050233c9bb58f105c1e9c4af8eac75ba",
".git/objects/f2/01f16c1a0bc8fb656703f009b87d1bbac61969": "3723f6cfe8a2e2a89dadaba755941d69",
".git/objects/f3/f0f0a8d03379efd19c34d9857c7f7249633db7": "2279d9d64f284ce6363f6a15cc6f589d",
".git/objects/f8/f3fc5514a25d53bb5a4475a143775030dcc85c": "da6a5da9568bd542941cb2f807ca7174",
".git/objects/fb/176839ac1d0da9a27a0a64704c15a826cafc0b": "b730665a1e58c7d965e2e63b545fca8b",
".git/objects/fc/63e01f18d7026b6e9e7fecdb0bb648cd7e9bf4": "5e4ad9efcd64a021079861fbaecddcc8",
".git/objects/fd/a97805677d8fe4e07eb242f0891fc4a57be40e": "a17c2836deb826c71fbd25d3c18cfdd8",
".git/objects/fd/f9d5c35187681c7e52e70f8ea2704ae6c313f9": "76b231d21121b577adce836725efec79",
".git/objects/fe/453b51b95b7be418e321019d61c2eceff09c5d": "89bb5c10c0297d0e56c546811ba0d2a8",
".git/objects/pack/pack-633d3be820659c36d55b8534889894471bce4c24.idx": "d30544a57bea6ff749ed73917322b637",
".git/objects/pack/pack-633d3be820659c36d55b8534889894471bce4c24.pack": "32f5adeca774b2674ac40adabd6396d8",
".git/objects/pack/pack-633d3be820659c36d55b8534889894471bce4c24.rev": "7af090d2b11af3d582338e4f8b6687d2",
".git/ORIG_HEAD": "b4fba937d9b8e42a91edd4ea45a1400f",
".git/packed-refs": "94e13ce5378e54f8760dad3c512ecc56",
".git/refs/heads/main": "ee75f4c3c6327618e6e01118b5267ce5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ee75f4c3c6327618e6e01118b5267ce5",
".git/smartgit/logcache/nodes.uuid": "ddac6a1698bc629d37064323bc3f528b",
".git/smartgit/logcache/nodes4": "00ff4cfbf3eef5429e4acb89a1de3e0c",
".git/smartgit/logcache/subtrees.uuid": "4cb206d8998794fa30858a19edd7f08e",
".git/smartgit.config": "075a95783a20ba34433c20b847f296b3",
"assets/AssetManifest.json": "af5b2e90a25822765646b0f70afb1acd",
"assets/AssetManifest.smcbin": "15eee8daac0868b5f1e8084574290661",
"assets/assets/big_image/app_update_bg.png": "7c09ef7a5e38cba2103be90ca986e141",
"assets/assets/big_image/face_id_bg.png": "2454b64833e52282cadf4259f49c317e",
"assets/assets/big_image/secure_remind.png": "6a21837edfc147df8f7a619211a5b236",
"assets/assets/home_images/home_logo.png": "e11eee9dd2e22dba95598f7914d5fd07",
"assets/assets/icons/all_network.png": "129bb8ada3a1e09bf70b1236a9a25aa0",
"assets/assets/icons/arrow-bottom.png": "e616ce799a253d75350a3070630625de",
"assets/assets/icons/arrow_bottom_black.png": "98d61a1ffe30af1240522811ee601a80",
"assets/assets/icons/arrow_bottom_fill.png": "7edd40e25b9145336d5e4523ef60d40d",
"assets/assets/icons/arrow_down_gray.png": "7e3a8393fd7dd3804705a84c5d4d4ba0",
"assets/assets/icons/arrow_right_fill.png": "8e87cbc0a975454c0ff569f7446f683c",
"assets/assets/icons/big_notice.png": "75b3ed5117b61e4699d3cd14690e7622",
"assets/assets/icons/broswer.png": "b230a3f79cab689eea846461d440051b",
"assets/assets/icons/cancel_grey.png": "55117b6baa2c2f68e17f4a81b43debd0",
"assets/assets/icons/check_primary.png": "941e83c42797b85d85d0ce0d7329f707",
"assets/assets/icons/close.png": "cd7b26d9d0afe434a142a43cd4dfba92",
"assets/assets/icons/close_eye.png": "1bb6715efe2b55a22132ebccdc37151e",
"assets/assets/icons/complete.png": "60a58fbd950f288b37b8df9918eb822c",
"assets/assets/icons/copy-t.png": "abd6d555be19cf1f64c70fc2396dd232",
"assets/assets/icons/earth.png": "de1d09880e9d728d53c7475edddb6705",
"assets/assets/icons/exchange.png": "2e89460cc77800bdaac4dd25a11a027b",
"assets/assets/icons/exchange_primary.png": "a42f4353239e984db16e11370c1ffd32",
"assets/assets/icons/eye_not_allow.png": "69334846944b02915a4ecf14fcb67383",
"assets/assets/icons/forward.png": "49ea7ca893f2abfdaaa80de01eab3d6d",
"assets/assets/icons/important.png": "a59661833b18836485d32bd44e27b070",
"assets/assets/icons/input_search.png": "5e291eea0f6e6e487bc50f54cb4d00b7",
"assets/assets/icons/message.png": "352a4e90c55aa593b3a1701162d57699",
"assets/assets/icons/nav-home-active.png": "03fb13be174d1e62cb68480d876c71ee",
"assets/assets/icons/nav-market-u.png": "f2132677ce38baadb8d502883771d7b0",
"assets/assets/icons/nav-my.png": "9976a7d63f4b70617accd36e80263f54",
"assets/assets/icons/nav-transfer-active.png": "5536084a240281562015e8f0a1ab4d2a",
"assets/assets/icons/nav-transfer-u.png": "4b3f7a4ae3fed31d1ab2dfd316ac6da3",
"assets/assets/icons/nav_home.png": "c8c85335d876786feda223b01deba36d",
"assets/assets/icons/nav_market_active.png": "dad5d011d54c177d792923614483cec6",
"assets/assets/icons/nav_my_active.png": "3ded03885c615bf571db21344b20f667",
"assets/assets/icons/nav_transfer-active.png": "76358aa907250cd8b9ee77aad4be195b",
"assets/assets/icons/nav_transfer_active.png": "5536084a240281562015e8f0a1ab4d2a",
"assets/assets/icons/primary_arrow_right.png": "d8be04a7b3636e982d20ecd80d9c9a18",
"assets/assets/icons/receive.png": "17cbe0ece71fdd48cc24da10da5ff3cb",
"assets/assets/icons/receive_primary.png": "6df55f549178eb509011a67c7f22a716",
"assets/assets/icons/refresh.png": "22b55c7eee3df2fb56baae72a16aeff6",
"assets/assets/icons/risk_notice.png": "db648909b06b91be94b66e4969dd52ae",
"assets/assets/icons/round_close.png": "f294f78b601db424352539db4f6e874e",
"assets/assets/icons/round_num1.png": "877f246e23799fe04e3a8c796f34d301",
"assets/assets/icons/round_num2.png": "328d97b97ea78ad997d7af73e38e01e9",
"assets/assets/icons/scanner-text.png": "b94f3f125e4be4a397ef44c7764bfb4d",
"assets/assets/icons/scanner.png": "bb5bc95c35b8e18e9a4e3e87bb94789c",
"assets/assets/icons/search.png": "0db085e8b3e8f3dee33ac6cd90da5768",
"assets/assets/icons/send.png": "dd257dcd4d76b6bcdf8189c377f1b87b",
"assets/assets/icons/send_primary.png": "03677d0e807679e1b8262c0a6d841fa7",
"assets/assets/icons/share.png": "0cf2aab805a7f16aea5902fdac805e79",
"assets/assets/icons/switch_grey.png": "3d5a8a6702279db3efce8c2c138cf4b7",
"assets/assets/icons/switch_icon.png": "c0415176ecdaaf13b3a752155bc55b42",
"assets/assets/icons/switch_op.png": "348bc1f4599ae3bd30396f6b2cc3cd4f",
"assets/assets/icons/transfer_record.png": "9e4a2d3be699d09816a8dff477ae1bfd",
"assets/assets/icons/wallet.png": "9040432772de200d39e0cf047b6e36af",
"assets/assets/icons/wallet_add.png": "81f2dcc40a817c37f80b19a6f287ec6e",
"assets/assets/icons/wallet_backup.png": "11e21e79c361328eeeec6bb7f581b480",
"assets/assets/icons/wallet_edit.png": "bafa51667619f96db1baf8ec165da8da",
"assets/assets/icons/wallet_icon.png": "70c2304451d136deabc9550b2570ab84",
"assets/assets/icons/wallet_secure.png": "47ce885c4c2db4ff8eb43e6cc4dfa1bf",
"assets/assets/icons/warn_important.png": "3b1b3940fac09db39358a212281e6b5d",
"assets/assets/icons/white_important.png": "2ed17b7841e8d90743833a53fa62081a",
"assets/assets/icons/yellow_star.png": "ad14014117f6969a14e0c9bb409576d6",
"assets/assets/logo/uou_logo.png": "086e7b5042be174f6c75fdc6bc63dc7b",
"assets/assets/logo/uou_logo_fill.png": "dcdb7d00cf136341cbe65d5e4daa3aec",
"assets/assets/my_wallet/about.png": "090e5b124c64f02e853b79119de2b7ca",
"assets/assets/my_wallet/address.png": "2d097ebb2f325fc38a57dc97e43f5b08",
"assets/assets/my_wallet/add_user.png": "aab1ae77a20c74bc8fe381ba1a49ada9",
"assets/assets/my_wallet/help.png": "80b57d5ecd1e60e85301c2ba42d0418b",
"assets/assets/my_wallet/notice.png": "3a97572110fd2c344275fd4aa3d86446",
"assets/assets/my_wallet/setting.png": "d912e4b6f99ddbc9a171d627a14b92f4",
"assets/assets/my_wallet/wallet.png": "1162db3f57560b509149109cbc52c11b",
"assets/assets/receive_eth/copy.png": "e675c7185529f381e5690e0b88cdc7c1",
"assets/assets/receive_eth/set_number.png": "8f731158086f82f259fe49c82b1946c4",
"assets/assets/receive_eth/share.png": "636603b3edd18300e8dded914fab1176",
"assets/assets/share_icon/facebook.png": "a35887370a49997a68f22a8a23b02ebc",
"assets/assets/share_icon/instagram.png": "cb445922e3920027af2f15bb409074bd",
"assets/assets/share_icon/more.png": "361551792b2e6b4a115c25f49c8a509e",
"assets/assets/share_icon/saveImage.png": "b55e15565efd22861a8b3a073cd696a7",
"assets/assets/share_icon/sms.png": "9a92690c46cc8b4469a4aea8a6cfe7f1",
"assets/assets/share_icon/telegram.png": "081b51abdb9d76940f7d396d0e8f5cc7",
"assets/assets/share_icon/twitter.png": "3aafdc489cd2165719725862b2d245f7",
"assets/assets/share_icon/whatsApp.png": "07c517baa701c96d1d0497f2c0d91fef",
"assets/assets/tips_word_confirm/copy.png": "6f3730f7529ddf60d3a6f7f6e0c39d8a",
"assets/assets/tips_word_confirm/tips.png": "99be7b2b2dd61052ecc92497f3653b71",
"assets/assets/tips_word_confirm/warning-1.png": "2ab45eaf387adddba35a75c1db7e0b93",
"assets/assets/tips_word_confirm/warning-2.png": "c1feac9ae2654d236cdeb656cc48d73f",
"assets/assets/transaction_type/charge.png": "2989d52d9f523013f71dc76606ca9ab7",
"assets/assets/transaction_type/contract.png": "e24e64771ca889b5d239a30c99db12ea",
"assets/assets/transaction_type/receive.png": "1a47d4270a983bc9af0d5da840f020fa",
"assets/assets/wallet_manage/edit.png": "e065eda6b236d5943a0adb74122126c6",
"assets/assets/wallet_manage/move.png": "4bf70716f68cc66ddbb1d13ab05720f3",
"assets/assets/wallet_manage/remove.png": "95866b47d7e7c9f504c041aa3d005e19",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "eae2f52f52164b08c02be62eca533630",
"assets/NOTICES": "5d5145c6f90ccccce88df0265bb34bf6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/resources/langs/en-US.json": "6a7898ad0f0052b98222816c21ef7f74",
"assets/resources/langs/zh-CN.json": "0ddab13a4dc7241a1cc3cd39138e4a49",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"index.html": "f206201b09030ca060afda99b442a424",
"/": "f206201b09030ca060afda99b442a424",
"main.dart.js": "3bbb4b7eb19c85ad9a4d05bae1c65ba5",
"README.md": "56a0a0a0e95703728e6ca36d7db52958",
"version.json": "79c0904321453250c579460f8f8142c2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
