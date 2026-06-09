import type { INodeProperties } from 'n8n-workflow';

export const directoryObjectUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					]
				}
			},
			"options": [
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User A 72 A",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User A 72 A",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/owners/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 9410",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 9410",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/owners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/directReports/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User F 858",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User F 858",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/directReports/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/memberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 90 E 6",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 90 E 6",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveMemberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User F 014",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User F 014",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 89 B 3",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 89 B 3",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/registeredOwners/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 2183",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 2183",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/registeredOwners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/registeredUsers/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Ccb 4",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Ccb 4",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/registeredUsers/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User E 6 F 4",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User E 6 F 4",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User B 145",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User B 145",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/deletedItems/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 97 Ed",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 97 Ed",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/deletedItems/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/members/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 8323",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 8323",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/memberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User A 831",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User A 831",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/members/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 C 25",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 C 25",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/membersWithLicenseErrors/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 5773",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 5773",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/membersWithLicenseErrors/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/owners/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 3 De 8",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 3 De 8",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/owners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMemberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 5117",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 5117",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMembers/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User C 1 B 1",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User C 1 B 1",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMembers/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User C 4 Ce",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User C 4 Ce",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredOwners/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Eaac",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Eaac",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredOwners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredUsers/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 951 A",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 951 A",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredUsers/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Bf 1 F",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Bf 1 F",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/directReports/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 35 Ad",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 35 Ad",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/directReports/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/memberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Aac 1",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Aac 1",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/transitiveMemberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Ac 73",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Ac 73",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/memberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 72 B 2",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 72 B 2",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/owners/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 908 B",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 908 B",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/owners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/transitiveMemberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 08 A 1",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 08 A 1",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 966 F",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 966 F",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/registeredOwners/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User D 9 D 4",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User D 9 D 4",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/registeredOwners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/registeredUsers/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 Bde",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 Bde",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/registeredUsers/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 8543",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 8543",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/directReports/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Bb 8 D",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User Bb 8 D",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/directReports/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/memberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 030 A",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 030 A",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5",
					"action": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.user in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/transitiveMemberOf/microsoft.graph.user"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 85 B 5",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph User 85 B 5",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.user"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/members/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 72 A"
					]
				}
			}
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/members/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User A 72 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User A 72 A"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/owners/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 9410"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/owners/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 9410"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 9410"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/directReports/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 858"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/directReports/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User F 858"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User F 858"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/memberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 90 E 6"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 90 E 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 90 E 6"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveMemberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 014"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User F 014"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User F 014"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/memberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 89 B 3"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 89 B 3"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 89 B 3"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/registeredOwners/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 2183"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/registeredOwners/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 2183"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 2183"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/registeredUsers/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Ccb 4"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/registeredUsers/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Ccb 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Ccb 4"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/transitiveMemberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User E 6 F 4"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User E 6 F 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User E 6 F 4"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/members/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 145"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/members/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User B 145"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User B 145"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/deletedItems/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User B 663"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/deletedItems/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 97 Ed"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 97 Ed"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 97 Ed"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}/members/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8323"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 8323"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 8323"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/memberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User A 831"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/memberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User A 831"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User A 831"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/members/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 C 25"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/members/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 C 25"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 C 25"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/membersWithLicenseErrors/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5773"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 5773"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 5773"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/owners/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 3 De 8"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/owners/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 3 De 8"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 3 De 8"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMemberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 5117"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 5117"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 5117"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMembers/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 1 B 1"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMembers/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User C 1 B 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User C 1 B 1"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/memberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User C 4 Ce"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User C 4 Ce"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User C 4 Ce"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredOwners/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Eaac"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredOwners/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Eaac"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Eaac"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredUsers/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 951 A"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredUsers/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 951 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 951 A"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/transitiveMemberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bf 1 F"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Bf 1 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Bf 1 F"
					]
				}
			}
		},
		{
			"displayName": "GET /me/directReports/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8601"
					]
				}
			}
		},
		{
			"displayName": "GET /me/directReports/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 35 Ad"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 35 Ad"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 35 Ad"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 35 Ad"
					]
				}
			}
		},
		{
			"displayName": "GET /me/memberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User F 8 C 6"
					]
				}
			}
		},
		{
			"displayName": "GET /me/memberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Aac 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Aac 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Aac 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Aac 1"
					]
				}
			}
		},
		{
			"displayName": "GET /me/transitiveMemberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 04 C 6"
					]
				}
			}
		},
		{
			"displayName": "GET /me/transitiveMemberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Ac 73"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Ac 73"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Ac 73"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Ac 73"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/memberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 72 B 2"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 72 B 2"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 72 B 2"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/owners/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 908 B"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/owners/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 908 B"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 908 B"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 08 A 1"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 08 A 1"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 08 A 1"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/memberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 966 F"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 966 F"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 966 F"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/registeredOwners/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User D 9 D 4"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/registeredOwners/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User D 9 D 4"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User D 9 D 4"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/registeredUsers/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 0 Bde"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/registeredUsers/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 Bde"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 0 Bde"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 8543"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 8543"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 8543"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/directReports/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User Bb 8 D"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/directReports/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Bb 8 D"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User Bb 8 D"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/memberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 030 A"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/memberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 030 A"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 030 A"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/transitiveMemberOf/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph User 85 B 5"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 85 B 5"
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
						"Directory Object User"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph User 85 B 5"
					]
				}
			}
		},
];
