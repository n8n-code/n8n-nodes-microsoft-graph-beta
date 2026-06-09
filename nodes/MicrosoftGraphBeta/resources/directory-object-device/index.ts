import type { INodeProperties } from 'n8n-workflow';

export const directoryObjectDeviceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					]
				}
			},
			"options": [
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 3 F 2 E",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 3 F 2 E",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/memberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 492 F",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 492 F",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveMemberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device Bc 58",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device Bc 58",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device Caf 0",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device Caf 0",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 998",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 998",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 7 Ae",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 7 Ae",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/members/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 17 C 2",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 17 C 2",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/memberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 6136",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 6136",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/members/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 52 Ee",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 52 Ee",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/membersWithLicenseErrors/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 84 B",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 84 B",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/membersWithLicenseErrors/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/owners/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 0674",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 0674",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/owners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMemberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 1181",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 1181",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMembers/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 9244",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 9244",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMembers/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 7 A 1",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 7 A 1",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8170",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8170",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/memberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 77 D 4",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 77 D 4",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/ownedDevices/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 4 B 57",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 4 B 57",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/ownedDevices/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/registeredDevices/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device E 167",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device E 167",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/registeredDevices/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/transitiveMemberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 6 A 6",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 6 A 6",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/memberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8022",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8022",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/transitiveMemberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 293",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 293",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device C 65 D",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device C 65 D",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 09 D",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 09 D",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/memberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 2369",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 2369",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/ownedDevices/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 12 De",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device 12 De",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/ownedDevices/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/registeredDevices/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 359",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 359",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/registeredDevices/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676",
					"action": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.device in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/transitiveMemberOf/microsoft.graph.device"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 676",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 676",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.device"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/members/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/members/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 3 F 2 E"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/memberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 492 F"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveMemberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device Bc 58"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/memberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device Caf 0"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/transitiveMemberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 998"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/members/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/members/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 7 Ae"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}/members/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 17 C 2"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/memberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/memberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 6136"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/members/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/members/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 52 Ee"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/membersWithLicenseErrors/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 84 B"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/owners/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/owners/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 0674"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMemberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 1181"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMembers/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMembers/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 9244"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/memberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 7 A 1"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/transitiveMemberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8170"
					]
				}
			}
		},
		{
			"displayName": "GET /me/memberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 131"
					]
				}
			}
		},
		{
			"displayName": "GET /me/memberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 77 D 4"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 77 D 4"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 77 D 4"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 77 D 4"
					]
				}
			}
		},
		{
			"displayName": "GET /me/ownedDevices/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 237"
					]
				}
			}
		},
		{
			"displayName": "GET /me/ownedDevices/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 4 B 57"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 4 B 57"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 4 B 57"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 4 B 57"
					]
				}
			}
		},
		{
			"displayName": "GET /me/registeredDevices/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 D 79"
					]
				}
			}
		},
		{
			"displayName": "GET /me/registeredDevices/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device E 167"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device E 167"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device E 167"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device E 167"
					]
				}
			}
		},
		{
			"displayName": "GET /me/transitiveMemberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 6 C 00"
					]
				}
			}
		},
		{
			"displayName": "GET /me/transitiveMemberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 6 A 6"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 6 A 6"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 6 A 6"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device B 6 A 6"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/memberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 8022"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device F 293"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/memberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device C 65 D"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device D 09 D"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/memberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/memberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 2369"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/ownedDevices/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/ownedDevices/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device 12 De"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/registeredDevices/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/registeredDevices/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 359"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/transitiveMemberOf/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 676"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Device"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Device A 676"
					]
				}
			}
		},
];
