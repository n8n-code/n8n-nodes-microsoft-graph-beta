import type { INodeProperties } from 'n8n-workflow';

export const directoryObjectOrgContactDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					]
				}
			},
			"options": [
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 019",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 019",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/directReports/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 38 D",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 38 D",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/directReports/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/memberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 31 D 5",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 31 D 5",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveMemberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 84 A 6",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 84 A 6",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 85 Fa",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 85 Fa",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4 Aa 4",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4 Aa 4",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 1",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 1",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/members/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 0952",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 0952",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/memberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4792",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4792",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/members/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 2",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 2",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/members/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/membersWithLicenseErrors/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 543 B",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 543 B",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/membersWithLicenseErrors/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/owners/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 049 B",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 049 B",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/owners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMemberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 1899",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 1899",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMembers/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 65 E",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 65 E",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/transitiveMembers/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Eebc",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Eebc",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 A 06",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 A 06",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/directReports/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 452",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 452",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/directReports/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/memberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3973",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3973",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/transitiveMemberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 5 Af 7",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 5 Af 7",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/memberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 34 Ea",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 34 Ea",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/transitiveMemberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 01 A 2",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 01 A 2",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/memberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Dccb",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Dccb",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 907 B",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 907 B",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/directReports/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 000 D",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 000 D",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/directReports/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/memberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact D 6 A 1",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact D 6 A 1",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806",
					"action": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.orgContact in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/transitiveMemberOf/microsoft.graph.orgContact"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact A 806",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact A 806",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.orgContact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.orgContact"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/members/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact E 019"
					]
				}
			}
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/members/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 019"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 019"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/directReports/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 38 D"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/directReports/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 38 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 38 D"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/memberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 31 D 5"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 31 D 5"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 31 D 5"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveMemberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 84 A 6"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 84 A 6"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 84 A 6"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/memberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 85 Fa"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 85 Fa"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 85 Fa"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/transitiveMemberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4 Aa 4"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4 Aa 4"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4 Aa 4"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/members/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 1"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/administrativeUnits/{administrativeUnit-id}/members/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 1"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}/members/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 0952"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}/members/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 0952"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 0952"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/memberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 4792"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/memberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4792"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 4792"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/members/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 Ab 2"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/members/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 Ab 2"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/membersWithLicenseErrors/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 543 B"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 543 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 543 B"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/owners/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 049 B"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/owners/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 049 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 049 B"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMemberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 1899"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 1899"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 1899"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMembers/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact C 65 E"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/transitiveMembers/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 65 E"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact C 65 E"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/memberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Eebc"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Eebc"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Eebc"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/transitiveMemberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 3 A 06"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 A 06"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3 A 06"
					]
				}
			}
		},
		{
			"displayName": "GET /me/directReports/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Db 00"
					]
				}
			}
		},
		{
			"displayName": "GET /me/directReports/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 452"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 452"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 452"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact E 452"
					]
				}
			}
		},
		{
			"displayName": "GET /me/memberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 77 D 9"
					]
				}
			}
		},
		{
			"displayName": "GET /me/memberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3973"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3973"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3973"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 3973"
					]
				}
			}
		},
		{
			"displayName": "GET /me/transitiveMemberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Ed 0 D"
					]
				}
			}
		},
		{
			"displayName": "GET /me/transitiveMemberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 5 Af 7"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 5 Af 7"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 5 Af 7"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 5 Af 7"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/memberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 34 Ea"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 34 Ea"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 34 Ea"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 01 A 2"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 01 A 2"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 01 A 2"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/memberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact Dccb"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Dccb"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact Dccb"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 907 B"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 907 B"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 907 B"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/directReports/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact 000 D"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/directReports/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 000 D"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact 000 D"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/memberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact D 6 A 1"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/memberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact D 6 A 1"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact D 6 A 1"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/transitiveMemberOf/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Org Contact A 806"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}/microsoft.graph.orgContact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact A 806"
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
						"Directory Object Org Contact"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Org Contact A 806"
					]
				}
			}
		},
];
