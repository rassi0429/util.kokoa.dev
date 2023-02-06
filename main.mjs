import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.listen(3000, () => console.log("3000 ok "))


app.get("/v1/neos/join.json", (req,res) => {
    const url = req.query.url
    const template = '{"Object":{"ID":"08094e0d-8cd2-4280-9afb-db83e115e7f8","Components":{"ID":"283dad89-f58c-47ab-8493-4e4dabdec03e","Data":[]},"Name":{"ID":"5d9a4c70-30da-4af4-92ed-ce0e65b705e7","Data":"AutoJoinTool"},"Tag":{"ID":"23fc01b1-b6de-4aa3-8d10-0bff44c2a7c0","Data":null},"Active":{"ID":"8088a2ad-7014-4f7c-b289-608060e6678c","Data":true},"Persistent-ID":"afad9329-4042-41fd-b619-e4fb32b977bf","Position":{"ID":"188beb4b-ab68-4be9-822d-f8705431f68f","Data":[0,0,0]},"Rotation":{"ID":"2281739c-54c1-47fa-b8e5-da3ec578303c","Data":[0,0,0,1]},"Scale":{"ID":"ed9f4185-9631-491c-a832-8ba51e79ee55","Data":[1,1,1]},"OrderOffset":{"ID":"ad984d3c-6820-42b9-88b5-f719c1283b61","Data":0},"ParentReference":"a5f11800-cc1f-48e2-ba01-d91ffe756f0d","Children":[{"ID":"93a8b23e-c177-4c39-9416-06c201df2a68","Components":{"ID":"ac033dc1-d19f-4122-9424-35f927c5628e","Data":[{"Type":"FrooxEngine.LogiX.WorldNodes.OpenWorld","Data":{"ID":"f45dba6d-90f8-4d77-ad96-29fff03a8cfb","persistent-ID":"16886af5-9cc4-4275-95be-f3e1d43aa572","UpdateOrder":{"ID":"fa487c58-4ddd-447f-bc12-7052f61bfec9","Data":0},"Enabled":{"ID":"63b5cd9d-194d-48cf-b1cb-5706d1bf1188","Data":true},"_activeVisual":{"ID":"77b727aa-370c-47e0-9d0d-d7a57f1c274f","Data":null},"URL":{"ID":"82391490-44cc-4e5b-97e9-b86d4bdea3bc","Data":"29f7f774-e0fa-483c-883f-7ca1c36cbe02"},"WorldLink":{"ID":"9b93376a-aac2-4cc7-9ebb-a5c2fcdcff48","Data":null},"Relation":{"ID":"47122779-0b6d-4f7d-a662-d54291813eb5","Data":null},"GetExisting":{"ID":"32796b96-cb41-4891-be0f-3d39d700fc1e","Data":"27af94c6-1c55-4776-83e3-19309841c300"},"LoadingIndicator":{"ID":"3fb89700-adfe-48c5-a8e1-d56a27626d10","Data":"0383371a-a4a4-4f3e-8928-6f8da546695b"},"AutoFocus":{"ID":"55695e74-9538-4d5c-a2b7-454639b0823d","Data":"27af94c6-1c55-4776-83e3-19309841c300"},"MakePrivate":{"ID":"f8019ebd-d1bd-4a81-892b-47897a8118d1","Data":null},"SessionUrl":{"ID":"f599c791-fe49-4661-a355-93e4b6c64f10","Data":null},"SessionId":{"ID":"c0fa8e3d-1a34-4636-a435-1d928f7588a8","Data":null},"OnOpenStart":{"ID":"54fdbaab-f47b-4b14-99a8-3ee997617669","Data":{"Target":null}},"OnOpenDone":{"ID":"4c9bc263-2ed0-47a7-a668-df564e175625","Data":{"Target":null}},"OnWorldReady":{"ID":"dbce850e-6379-4ce8-9499-c0247c4c48c8","Data":{"Target":"419147a9-259c-41e0-99b5-7ce3a1f390ea","Method":"DoDestroy"}},"OnOpenFail":{"ID":"9d606d33-563f-4a72-b0df-dbb8fee2347a","Data":{"Target":null}}}}]},"Name":{"ID":"27db8f6d-709c-46aa-ab7b-bda17f8b16b2","Data":"Open World"},"Tag":{"ID":"212159a1-7055-47fe-8075-c5f9ef06a9a6","Data":null},"Active":{"ID":"5b8e6ccd-2591-4c56-bfca-5d610501b25e","Data":true},"Persistent-ID":"b0a0db37-a836-4f2b-9f6c-a57d73333883","Position":{"ID":"5eb0ed7a-bd55-4df4-bf35-93e4fa86ed15","Data":[-0.0810572654,-0.122002244,0.272317648]},"Rotation":{"ID":"ed1f077d-b6da-4c77-a7e9-e8dcc3603973","Data":[0,0,0,1]},"Scale":{"ID":"1d91f0cd-dd59-4b8c-8e81-1fd63e4463bc","Data":[1,1,1]},"OrderOffset":{"ID":"b5cf5ca9-11bb-4afe-b3e7-4dcbdea02529","Data":0},"ParentReference":"33c1baef-aa7e-4979-bc60-aecdc5aa5a47","Children":[]},{"ID":"7b266817-8465-45ad-8119-40321ab57af1","Components":{"ID":"e92ab424-8dc5-4add-bef3-bee8c88324a6","Data":[{"Type":"FrooxEngine.LogiX.Input.UriInput","Data":{"ID":"29f7f774-e0fa-483c-883f-7ca1c36cbe02","persistent-ID":"b266ab0c-5c53-403c-8056-1069f470e732","UpdateOrder":{"ID":"ceea7ba0-0b35-4042-a604-5deb95c42927","Data":0},"Enabled":{"ID":"d7202f57-5224-4864-a557-c961f6b9f31a","Data":true},"_activeVisual":{"ID":"01ce2d9c-40d0-4855-8ed8-873e13510c27","Data":null},"_value":{"ID":"bd6e54e9-78ae-45ae-aed5-5033edadfeb0","Data":"@REPLACE_HERE"}}}]},"Name":{"ID":"977787c9-ef72-4635-a310-75cd8c4e45f4","Data":"Uri"},"Tag":{"ID":"9d3194ef-a174-4795-8dc3-a88cff057b1f","Data":null},"Active":{"ID":"70293c00-ecf8-4c29-8378-6f0b12906984","Data":true},"Persistent-ID":"cb8ba093-89f5-4bdd-a94b-02e215538120","Position":{"ID":"f184d35c-4299-408e-a81c-6d7f807158c8","Data":[-0.3441249,-0.0377107859,0.276133418]},"Rotation":{"ID":"d235f9ed-fbfc-4fc7-879e-c2141b2d8eb2","Data":[0,0,0,1]},"Scale":{"ID":"6a2311ba-4666-47f3-9590-327286103bb0","Data":[1,1,1]},"OrderOffset":{"ID":"e06fc106-19f5-45c5-b283-d9d8d6e40e9d","Data":0},"ParentReference":"653f2103-72ab-4fb4-8894-f282af148445","Children":[]},{"ID":"0855a71e-eea5-443b-90b0-23ea7494c4ac","Components":{"ID":"bf80b10c-6249-42e8-9796-6e7b6d85f6dc","Data":[{"Type":"FrooxEngine.LogiX.ProgramFlow.OnLoadedNode","Data":{"ID":"0646d6b1-ecac-4bf7-be68-f0d7d5ce7676","persistent-ID":"e6fe18e2-37e7-4504-8586-9cc70a0dd341","UpdateOrder":{"ID":"72d4f5e8-6837-4181-9a1f-5e55b0780bbe","Data":0},"Enabled":{"ID":"7bd5bb4b-db54-4935-8779-332aee6f14b0","Data":true},"_activeVisual":{"ID":"0f5ecc06-5398-45c4-9cd4-0c27bcf83e2b","Data":null},"Loaded":{"ID":"173317a9-8102-491b-be24-1fd62733da19","Data":{"Target":"f45dba6d-90f8-4d77-ad96-29fff03a8cfb","Method":"Open"}}}}]},"Name":{"ID":"299442f0-a375-4a0c-89a8-81e8e74e108a","Data":"On Loaded"},"Tag":{"ID":"f36a6532-1a48-43e9-ae31-28b77b176f61","Data":null},"Active":{"ID":"b27441c7-e5d3-47ba-b047-ead0b46988b6","Data":true},"Persistent-ID":"1917dc51-3dd2-4a38-b2f3-388acadb26a2","Position":{"ID":"d4929b07-85db-4056-868b-c9639efc164a","Data":[-0.215660974,0.028054595,0.286519378]},"Rotation":{"ID":"4fd2a84f-d7db-4d44-8d37-d03c6bd8bb94","Data":[0,0,0,1]},"Scale":{"ID":"b4870d37-f287-48c8-b070-fdcdb332419a","Data":[1,1,1]},"OrderOffset":{"ID":"6d60b211-1040-45b1-bffc-dde2b60d7888","Data":0},"ParentReference":"99cc8055-785a-4721-b9c8-20b3eb550836","Children":[]},{"ID":"ad8f7e55-66e8-412e-945a-6fab76fc5a0b","Components":{"ID":"c7819e16-6c53-47ce-8eae-c3cf6bd0fae1","Data":[{"Type":"FrooxEngine.LogiX.Input.BoolInput","Data":{"ID":"27af94c6-1c55-4776-83e3-19309841c300","persistent-ID":"d92d474e-6923-4e9f-8c72-e91cdf438fc0","UpdateOrder":{"ID":"a62678eb-6481-4102-b5fe-cc652bec783a","Data":0},"Enabled":{"ID":"134b5eda-762a-4142-a6b9-5d3747e41d6c","Data":true},"_activeVisual":{"ID":"4f863b09-163f-4f11-941d-80e28866adc1","Data":null},"Value":{"ID":"7f762e1c-8bd1-4003-8f6d-204ca31b9b65","Data":true}}}]},"Name":{"ID":"1a6e64fe-5f91-453f-9d27-0b243b4efd1b","Data":"bool"},"Tag":{"ID":"e5782e11-470a-431b-aa55-42e6fa567313","Data":null},"Active":{"ID":"67bcf177-83b1-4c67-a8b9-e8ed841f8bdb","Data":true},"Persistent-ID":"e40bcbca-bc15-4b13-b10e-01278ac97169","Position":{"ID":"fe671049-d05c-459a-8364-f7d60ea59da7","Data":[-0.1956563,-0.1414541,0.267544538]},"Rotation":{"ID":"7d80039b-e1e1-4321-b3f1-5ddda5437ec0","Data":[0,0,0,1]},"Scale":{"ID":"9aad4f4d-aad4-4c1c-b551-12fa685b9de8","Data":[1,1,1]},"OrderOffset":{"ID":"e78244ad-2725-4779-a5dc-98b727f0f446","Data":0},"ParentReference":"a974665f-a183-453e-b54c-b30699a65431","Children":[]},{"ID":"bae3ebd8-e5d3-45d2-9a98-6517b677495d","Components":{"ID":"a35cad83-9b45-4529-b463-a4ea614fc59e","Data":[{"Type":"FrooxEngine.LogiX.Input.BoolInput","Data":{"ID":"0383371a-a4a4-4f3e-8928-6f8da546695b","persistent-ID":"b8d508bd-542e-42d2-bfd3-277d55f8bb4b","UpdateOrder":{"ID":"38e071c7-83a7-4cca-9e51-2c1f69b0620a","Data":0},"Enabled":{"ID":"4394259a-37b0-4f1d-a0d8-7fd025af5042","Data":true},"_activeVisual":{"ID":"c1864681-bbe8-4d07-a5ff-a3b4e70e5905","Data":null},"Value":{"ID":"a763466b-89a7-4ed1-8b7d-dedad8667159","Data":true}}}]},"Name":{"ID":"6d0180b5-9cf8-4157-a106-b6c7d01e5f15","Data":"bool"},"Tag":{"ID":"fbadbebe-e577-4d58-a825-c59778dd1578","Data":null},"Active":{"ID":"396212e6-1742-4377-8c00-46653847905b","Data":true},"Persistent-ID":"52f09b2a-bf35-4996-b828-e0fe8e67f611","Position":{"ID":"b6ca1c51-1524-4210-bf23-30338b0b9fad","Data":[-0.197380617,-0.197030544,0.26113975]},"Rotation":{"ID":"4c186dab-12bd-40e3-84ce-c8dc93a02611","Data":[0,0,0,1]},"Scale":{"ID":"d06c990d-9222-43d7-9044-37ab752499e2","Data":[1,1,1]},"OrderOffset":{"ID":"e3a49ecb-4f13-44a8-8696-7c24a6e15718","Data":0},"ParentReference":"2d21baa5-3653-49de-973d-c7440c540c25","Children":[]},{"ID":"fa720c43-1c28-4083-9c57-2ddd4b5284fd","Components":{"ID":"fcaad131-5276-41ab-825d-717ce1bf4eca","Data":[{"Type":"FrooxEngine.LogiX.WorldModel.DestroySlot","Data":{"ID":"419147a9-259c-41e0-99b5-7ce3a1f390ea","persistent-ID":"0d3200dd-f872-4905-a10f-f0de1f8294a0","UpdateOrder":{"ID":"a20ad125-ba2d-42b7-b849-af913d7dd1a0","Data":0},"Enabled":{"ID":"1c431a43-c766-4187-8ad3-8fcc399fe846","Data":true},"_activeVisual":{"ID":"b3f2a87d-ffb6-4a0d-8295-6a587d7e8538","Data":null},"Instance":{"ID":"70f005d8-d70c-4f36-8055-483def0987b8","Data":"1de7ce02-ccca-4f5a-aa59-0069e45aef34"},"PreserveAssets":{"ID":"ebeb9cbb-83f2-41c6-be24-e3feb53f3624","Data":null},"SendDestroyingEvent":{"ID":"5d16dd0b-3e97-4ec1-8e42-b82398ac7fd5","Data":null},"OnDone":{"ID":"fe421c3b-dbf8-4e23-adea-1bfecc4b3ddd","Data":{"Target":null}}}}]},"Name":{"ID":"3ccaa62a-9ee4-4109-8e84-7aec3d1f824b","Data":"Destroy Slot"},"Tag":{"ID":"c426e5e5-b2d9-4d12-8afd-f867415dd231","Data":null},"Active":{"ID":"5d6f7c41-4386-4420-8545-c3cd0b6323f7","Data":true},"Persistent-ID":"b5158e2e-5a08-426c-a2a8-a76e44364f7d","Position":{"ID":"9185f66d-ff1d-4e44-8c11-38a572d6d005","Data":[0.07649961,-0.1574304,0.272317678]},"Rotation":{"ID":"9be95890-7fa8-403b-af4d-ccc6eeb6d62e","Data":[0,0,0,1]},"Scale":{"ID":"eae9c71d-fd4b-4d1d-9ead-be6024a3a0d3","Data":[1,1,1]},"OrderOffset":{"ID":"c16a8be0-e596-4043-9184-a2f27997d064","Data":0},"ParentReference":"4192c307-7dad-4849-a84c-5f8c435dadbe","Children":[]},{"ID":"4bf614fe-e3eb-4944-b9b2-7caaf384a6b1","Components":{"ID":"ef122ab3-5a5d-4374-9fa7-192ed1b64856","Data":[{"Type":"FrooxEngine.LogiX.ReferenceNode`1[[FrooxEngine.Slot, FrooxEngine, Version=2022.1.28.1310, Culture=neutral, PublicKeyToken=null]]","Data":{"ID":"1de7ce02-ccca-4f5a-aa59-0069e45aef34","persistent-ID":"a5447c5b-39f3-4498-b3a2-5c4315aecb5d","UpdateOrder":{"ID":"5fe985ff-eff9-45d8-a073-4f3b05229d1f","Data":0},"Enabled":{"ID":"7f03f6af-bd09-4fe9-b7be-7e663785eb84","Data":true},"_activeVisual":{"ID":"d9ec3561-8d9f-40c4-bc2d-2d7797aa355a","Data":null},"RefTarget":{"ID":"1c8ee04f-bc8f-4cb9-92b3-e9c35a95bb97","Data":"08094e0d-8cd2-4280-9afb-db83e115e7f8"},"_registeredReference":{"ID":"1e3ed365-d0fd-4fff-b92e-7b7153b334a4","Data":"5d1b6a28-486a-4f5b-8be0-ecd16807eb94"}}}]},"Name":{"ID":"ebdeb70c-4d4c-41bc-9c6c-7414c887966e","Data":"Ref"},"Tag":{"ID":"c20872bd-88c5-4fe6-9c5a-a24f84bb6aef","Data":null},"Active":{"ID":"366017f2-3b9d-4593-aab0-b4ccab8750ad","Data":true},"Persistent-ID":"7b5e8d40-dea9-4fa9-bcf3-12c8c6f6c44b","Position":{"ID":"3c15b72f-2f7d-4f36-b90c-704ca2343d9d","Data":[-0.03645554,-0.138504788,0.272317559]},"Rotation":{"ID":"a5c8f6c6-94bd-42a6-af93-a0720b1ac936","Data":[0,0,0,1]},"Scale":{"ID":"62f1e829-77b3-4263-a185-bd11a077ee95","Data":[1,1,1]},"OrderOffset":{"ID":"a7a94c24-0a27-46f1-8d67-f4e594a2d3eb","Data":0},"ParentReference":"5fabf3d8-e668-4f42-b023-d5c881a629fe","Children":[]}]},"TypeVersions":{}}'
    const json = template.replace("REPLACE_HERE", url)
    res.send(json)
})