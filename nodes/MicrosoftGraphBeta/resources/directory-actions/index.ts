import type { INodeProperties } from 'n8n-workflow';

export const directoryActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					]
				}
			},
			"options": [
				{
					"name": "Directory Administrative Units Get By Ids",
					"value": "Directory Administrative Units Get By Ids",
					"action": "Invoke action getByIds",
					"description": "Return the directory objects specified in a list of IDs. Some common uses for this function are to:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/microsoft.graph.getByIds"
						}
					}
				},
				{
					"name": "Directory Administrative Units Get User Owned Objects",
					"value": "Directory Administrative Units Get User Owned Objects",
					"action": "Invoke action getUserOwnedObjects",
					"description": "Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/microsoft.graph.getUserOwnedObjects"
						}
					}
				},
				{
					"name": "Directory Administrative Units Validate Properties",
					"value": "Directory Administrative Units Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate that a Microsoft 365 group's display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to **create** a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties: \n1. Validate the prefix and suffix naming policy\n2. Validate the custom banned words policy\n3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/microsoft.graph.validateProperties"
						}
					}
				},
				{
					"name": "Directory Administrative Units Administrative Unit Check Member Groups",
					"value": "Directory Administrative Units Administrative Unit Check Member Groups",
					"action": "Invoke action checkMemberGroups",
					"description": "Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/microsoft.graph.checkMemberGroups"
						}
					}
				},
				{
					"name": "Directory Administrative Units Administrative Unit Check Member Objects",
					"value": "Directory Administrative Units Administrative Unit Check Member Objects",
					"action": "Invoke action checkMemberObjects",
					"description": "Invoke action checkMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/microsoft.graph.checkMemberObjects"
						}
					}
				},
				{
					"name": "Directory Administrative Units Administrative Unit Get Member Groups",
					"value": "Directory Administrative Units Administrative Unit Get Member Groups",
					"action": "Invoke action getMemberGroups",
					"description": "Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/microsoft.graph.getMemberGroups"
						}
					}
				},
				{
					"name": "Directory Administrative Units Administrative Unit Get Member Objects",
					"value": "Directory Administrative Units Administrative Unit Get Member Objects",
					"action": "Invoke action getMemberObjects",
					"description": "Invoke action getMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/microsoft.graph.getMemberObjects"
						}
					}
				},
				{
					"name": "Directory Administrative Units Administrative Unit Restore",
					"value": "Directory Administrative Units Administrative Unit Restore",
					"action": "Invoke action restore",
					"description": "Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. If an item was accidentally deleted, you can fully restore the item. This is not applicable to security groups, which are deleted permanently. A recently deleted item will remain available for up to 30 days. After 30 days, the item is permanently deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Directory Deleted Items Get By Ids",
					"value": "Directory Deleted Items Get By Ids",
					"action": "Invoke action getByIds",
					"description": "Return the directory objects specified in a list of IDs. Some common uses for this function are to:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/deletedItems/microsoft.graph.getByIds"
						}
					}
				},
				{
					"name": "Directory Deleted Items Get User Owned Objects",
					"value": "Directory Deleted Items Get User Owned Objects",
					"action": "Invoke action getUserOwnedObjects",
					"description": "Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/deletedItems/microsoft.graph.getUserOwnedObjects"
						}
					}
				},
				{
					"name": "Directory Deleted Items Validate Properties",
					"value": "Directory Deleted Items Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate that a Microsoft 365 group's display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to **create** a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties: \n1. Validate the prefix and suffix naming policy\n2. Validate the custom banned words policy\n3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/deletedItems/microsoft.graph.validateProperties"
						}
					}
				},
				{
					"name": "Directory Deleted Items Directory Object Check Member Groups",
					"value": "Directory Deleted Items Directory Object Check Member Groups",
					"action": "Invoke action checkMemberGroups",
					"description": "Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/deletedItems/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.checkMemberGroups"
						}
					}
				},
				{
					"name": "Directory Deleted Items Directory Object Check Member Objects",
					"value": "Directory Deleted Items Directory Object Check Member Objects",
					"action": "Invoke action checkMemberObjects",
					"description": "Invoke action checkMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/deletedItems/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.checkMemberObjects"
						}
					}
				},
				{
					"name": "Directory Deleted Items Directory Object Get Member Groups",
					"value": "Directory Deleted Items Directory Object Get Member Groups",
					"action": "Invoke action getMemberGroups",
					"description": "Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/deletedItems/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.getMemberGroups"
						}
					}
				},
				{
					"name": "Directory Deleted Items Directory Object Get Member Objects",
					"value": "Directory Deleted Items Directory Object Get Member Objects",
					"action": "Invoke action getMemberObjects",
					"description": "Invoke action getMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/deletedItems/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.getMemberObjects"
						}
					}
				},
				{
					"name": "Directory Deleted Items Directory Object Restore",
					"value": "Directory Deleted Items Directory Object Restore",
					"action": "Invoke action restore",
					"description": "Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. If an item was accidentally deleted, you can fully restore the item. This is not applicable to security groups, which are deleted permanently. A recently deleted item will remain available for up to 30 days. After 30 days, the item is permanently deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/deletedItems/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Directory Impacted Resources Impacted Resource Complete",
					"value": "Directory Impacted Resources Impacted Resource Complete",
					"action": "Invoke action complete",
					"description": "Invoke action complete",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/impactedResources/{{$parameter[\"impactedResource-id\"]}}/microsoft.graph.complete"
						}
					}
				},
				{
					"name": "Directory Impacted Resources Impacted Resource Dismiss",
					"value": "Directory Impacted Resources Impacted Resource Dismiss",
					"action": "Invoke action dismiss",
					"description": "Invoke action dismiss",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/impactedResources/{{$parameter[\"impactedResource-id\"]}}/microsoft.graph.dismiss"
						}
					}
				},
				{
					"name": "Directory Impacted Resources Impacted Resource Postpone",
					"value": "Directory Impacted Resources Impacted Resource Postpone",
					"action": "Invoke action postpone",
					"description": "Invoke action postpone",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/impactedResources/{{$parameter[\"impactedResource-id\"]}}/microsoft.graph.postpone"
						}
					}
				},
				{
					"name": "Directory Impacted Resources Impacted Resource Reactivate",
					"value": "Directory Impacted Resources Impacted Resource Reactivate",
					"action": "Invoke action reactivate",
					"description": "Invoke action reactivate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/impactedResources/{{$parameter[\"impactedResource-id\"]}}/microsoft.graph.reactivate"
						}
					}
				},
				{
					"name": "Directory Inbound Shared User Profiles Inbound Shared User Profile Export Personal Data",
					"value": "Directory Inbound Shared User Profiles Inbound Shared User Profile Export Personal Data",
					"action": "Invoke action exportPersonalData",
					"description": "Invoke action exportPersonalData",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/inboundSharedUserProfiles/{{$parameter[\"inboundSharedUserProfile-userId\"]}}/microsoft.graph.exportPersonalData"
						}
					}
				},
				{
					"name": "Directory Inbound Shared User Profiles Inbound Shared User Profile Remove Personal Data",
					"value": "Directory Inbound Shared User Profiles Inbound Shared User Profile Remove Personal Data",
					"action": "Invoke action removePersonalData",
					"description": "Invoke action removePersonalData",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/inboundSharedUserProfiles/{{$parameter[\"inboundSharedUserProfile-userId\"]}}/microsoft.graph.removePersonalData"
						}
					}
				},
				{
					"name": "Directory Outbound Shared User Profiles Outbound Shared User Profile Tenants Tenant Reference Remove Personal Data",
					"value": "Directory Outbound Shared User Profiles Outbound Shared User Profile Tenants Tenant Reference Remove Personal Data",
					"action": "Invoke action removePersonalData",
					"description": "Invoke action removePersonalData",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/outboundSharedUserProfiles/{{$parameter[\"outboundSharedUserProfile-userId\"]}}/tenants/{{$parameter[\"tenantReference-tenantId\"]}}/microsoft.graph.removePersonalData"
						}
					}
				},
				{
					"name": "Directory Recommendations Recommendation Complete",
					"value": "Directory Recommendations Recommendation Complete",
					"action": "Invoke action complete",
					"description": "Invoke action complete",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/recommendations/{{$parameter[\"recommendation-id\"]}}/microsoft.graph.complete"
						}
					}
				},
				{
					"name": "Directory Recommendations Recommendation Dismiss",
					"value": "Directory Recommendations Recommendation Dismiss",
					"action": "Invoke action dismiss",
					"description": "Invoke action dismiss",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/recommendations/{{$parameter[\"recommendation-id\"]}}/microsoft.graph.dismiss"
						}
					}
				},
				{
					"name": "Directory Recommendations Recommendation Postpone",
					"value": "Directory Recommendations Recommendation Postpone",
					"action": "Invoke action postpone",
					"description": "Invoke action postpone",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/recommendations/{{$parameter[\"recommendation-id\"]}}/microsoft.graph.postpone"
						}
					}
				},
				{
					"name": "Directory Recommendations Recommendation Reactivate",
					"value": "Directory Recommendations Recommendation Reactivate",
					"action": "Invoke action reactivate",
					"description": "Invoke action reactivate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/recommendations/{{$parameter[\"recommendation-id\"]}}/microsoft.graph.reactivate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /directory/administrativeUnits/microsoft.graph.getByIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/microsoft.graph.getUserOwnedObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Entity Type",
			"name": "entityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "entityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Mail Nickname",
			"name": "mailNickname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mailNickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "On Behalf Of User Id",
			"name": "onBehalfOfUserId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "onBehalfOfUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/{administrativeUnit-id}/microsoft.graph.checkMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Administrative Unit Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "groupIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Administrative Unit Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/{administrativeUnit-id}/microsoft.graph.checkMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Administrative Unit Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Administrative Unit Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/{administrativeUnit-id}/microsoft.graph.getMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Administrative Unit Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Administrative Unit Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/{administrativeUnit-id}/microsoft.graph.getMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Administrative Unit Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Administrative Unit Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/administrativeUnits/{administrativeUnit-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Administrative Units Administrative Unit Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/deletedItems/microsoft.graph.getByIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/deletedItems/microsoft.graph.getUserOwnedObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/deletedItems/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Entity Type",
			"name": "entityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "entityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Mail Nickname",
			"name": "mailNickname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mailNickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "On Behalf Of User Id",
			"name": "onBehalfOfUserId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "onBehalfOfUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/deletedItems/{directoryObject-id}/microsoft.graph.checkMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Directory Object Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "groupIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Directory Object Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/deletedItems/{directoryObject-id}/microsoft.graph.checkMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Directory Object Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Directory Object Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/deletedItems/{directoryObject-id}/microsoft.graph.getMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Directory Object Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Directory Object Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/deletedItems/{directoryObject-id}/microsoft.graph.getMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Directory Object Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Directory Object Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/deletedItems/{directoryObject-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Deleted Items Directory Object Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/impactedResources/{impactedResource-id}/microsoft.graph.complete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Impacted Resources Impacted Resource Complete"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/impactedResources/{impactedResource-id}/microsoft.graph.dismiss",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Impacted Resources Impacted Resource Dismiss"
					]
				}
			}
		},
		{
			"displayName": "Dismiss Reason",
			"name": "dismissReason",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "dismissReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Impacted Resources Impacted Resource Dismiss"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/impactedResources/{impactedResource-id}/microsoft.graph.postpone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Impacted Resources Impacted Resource Postpone"
					]
				}
			}
		},
		{
			"displayName": "Postpone Until Date Time",
			"name": "postponeUntilDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "postponeUntilDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Impacted Resources Impacted Resource Postpone"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/impactedResources/{impactedResource-id}/microsoft.graph.reactivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Impacted Resources Impacted Resource Reactivate"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/microsoft.graph.exportPersonalData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Inbound Shared User Profiles Inbound Shared User Profile Export Personal Data"
					]
				}
			}
		},
		{
			"displayName": "Storage Location",
			"name": "storageLocation",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "storageLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Inbound Shared User Profiles Inbound Shared User Profile Export Personal Data"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/microsoft.graph.removePersonalData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Inbound Shared User Profiles Inbound Shared User Profile Remove Personal Data"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}/microsoft.graph.removePersonalData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Outbound Shared User Profiles Outbound Shared User Profile Tenants Tenant Reference Remove Personal Data"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/recommendations/{recommendation-id}/microsoft.graph.complete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Recommendations Recommendation Complete"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/recommendations/{recommendation-id}/microsoft.graph.dismiss",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Recommendations Recommendation Dismiss"
					]
				}
			}
		},
		{
			"displayName": "Dismiss Reason",
			"name": "dismissReason",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "dismissReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Recommendations Recommendation Dismiss"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/recommendations/{recommendation-id}/microsoft.graph.postpone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Recommendations Recommendation Postpone"
					]
				}
			}
		},
		{
			"displayName": "Postpone Until Date Time",
			"name": "postponeUntilDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "postponeUntilDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Recommendations Recommendation Postpone"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/recommendations/{recommendation-id}/microsoft.graph.reactivate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Actions"
					],
					"operation": [
						"Directory Recommendations Recommendation Reactivate"
					]
				}
			}
		},
];
