import type { INodeProperties } from 'n8n-workflow';

export const directoryObjectApplicationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					]
				}
			},
			"options": [
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6761",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6761",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/memberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application Aacb",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application Aacb",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveMemberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 1 Fac",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 1 Fac",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6014",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6014",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 00 D",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 00 D",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application A 88 B",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application A 88 B",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/deletedItems/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 9 D 2",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 9 D 2",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/deletedItems/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/members/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application Ced 0",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application Ced 0",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/memberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application D 6 Af",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application D 6 Af",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/members/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 3 Dd 0",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 3 Dd 0",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/membersWithLicenseErrors/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8336",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8336",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/membersWithLicenseErrors/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/owners/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 B 7 C",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 B 7 C",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/owners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMemberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 044",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 044",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMembers/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 23 E 1",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 23 E 1",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMembers/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8 Cd 9",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8 Cd 9",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6446",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6446",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/memberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 568",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 568",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/ownedObjects/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 994",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 994",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/ownedObjects/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/transitiveMemberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 03 C 4",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 03 C 4",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/memberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 4 C 32",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 4 C 32",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/ownedObjects/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 09 A 3",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 09 A 3",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/ownedObjects/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/transitiveMemberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 33 B 2",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 33 B 2",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 47 E",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 47 E",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 7828",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 7828",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/memberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 F 8 A",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 F 8 A",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/ownedObjects/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 400 E",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 400 E",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/ownedObjects/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A",
					"action": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.application in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/transitiveMemberOf/microsoft.graph.application"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 146 A",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Application 146 A",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.application",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.application"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/members/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6761"
					]
				}
			}
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/members/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6761"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6761"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/memberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Aacb"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application Aacb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application Aacb"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveMemberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 1 Fac"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 1 Fac"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 1 Fac"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/memberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6014"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6014"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6014"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/transitiveMemberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 00 D"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 00 D"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 00 D"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/members/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application A 88 B"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/members/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application A 88 B"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application A 88 B"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/deletedItems/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 512 E"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/deletedItems/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 9 D 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 9 D 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 9 D 2"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}/members/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application Ced 0"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application Ced 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application Ced 0"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/memberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application D 6 Af"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/memberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application D 6 Af"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application D 6 Af"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/members/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 3 Dd 0"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/members/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 3 Dd 0"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 3 Dd 0"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/membersWithLicenseErrors/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8336"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8336"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8336"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/owners/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 B 7 C"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/owners/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 B 7 C"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 B 7 C"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMemberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application C 044"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 044"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 044"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMembers/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 23 E 1"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMembers/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 23 E 1"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 23 E 1"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/memberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 8 Cd 9"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8 Cd 9"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 8 Cd 9"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/transitiveMemberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 6446"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6446"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 6446"
					]
				}
			}
		},
		{
			"displayName": "GET /me/memberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application B 4 Fb"
					]
				}
			}
		},
		{
			"displayName": "GET /me/memberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 568"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 568"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 568"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 568"
					]
				}
			}
		},
		{
			"displayName": "GET /me/ownedObjects/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4552"
					]
				}
			}
		},
		{
			"displayName": "GET /me/ownedObjects/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 994"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 994"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 994"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application C 994"
					]
				}
			}
		},
		{
			"displayName": "GET /me/transitiveMemberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 60 B 7"
					]
				}
			}
		},
		{
			"displayName": "GET /me/transitiveMemberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 03 C 4"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 03 C 4"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 03 C 4"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 03 C 4"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/memberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 4 C 32"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 4 C 32"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 4 C 32"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 09 A 3"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 09 A 3"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 09 A 3"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 09 A 3"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 33 B 2"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 33 B 2"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 33 B 2"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/memberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application E 47 E"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 47 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application E 47 E"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 7828"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 7828"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 7828"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/memberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 0 F 8 A"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/memberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 F 8 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 0 F 8 A"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/ownedObjects/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 400 E"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/ownedObjects/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 400 E"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 400 E"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/transitiveMemberOf/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Application 146 A"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 146 A"
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
						"Directory Object Application"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Application 146 A"
					]
				}
			}
		},
];
