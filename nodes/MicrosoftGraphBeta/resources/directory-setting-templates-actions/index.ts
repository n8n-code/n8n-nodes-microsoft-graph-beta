import type { INodeProperties } from 'n8n-workflow';

export const directorySettingTemplatesActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Actions"
					]
				}
			},
			"options": [
				{
					"name": "Directory Setting Templates Get By Ids",
					"value": "Directory Setting Templates Get By Ids",
					"action": "Invoke action getByIds",
					"description": "Return the directory objects specified in a list of IDs. Some common uses for this function are to:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directorySettingTemplates/microsoft.graph.getByIds"
						}
					}
				},
				{
					"name": "Directory Setting Templates Get User Owned Objects",
					"value": "Directory Setting Templates Get User Owned Objects",
					"action": "Invoke action getUserOwnedObjects",
					"description": "Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directorySettingTemplates/microsoft.graph.getUserOwnedObjects"
						}
					}
				},
				{
					"name": "Directory Setting Templates Validate Properties",
					"value": "Directory Setting Templates Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate that a Microsoft 365 group's display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to **create** a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties: \n1. Validate the prefix and suffix naming policy\n2. Validate the custom banned words policy\n3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directorySettingTemplates/microsoft.graph.validateProperties"
						}
					}
				},
				{
					"name": "Directory Setting Templates Directory Setting Template Check Member Groups",
					"value": "Directory Setting Templates Directory Setting Template Check Member Groups",
					"action": "Invoke action checkMemberGroups",
					"description": "Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directorySettingTemplates/{{$parameter[\"directorySettingTemplate-id\"]}}/microsoft.graph.checkMemberGroups"
						}
					}
				},
				{
					"name": "Directory Setting Templates Directory Setting Template Check Member Objects",
					"value": "Directory Setting Templates Directory Setting Template Check Member Objects",
					"action": "Invoke action checkMemberObjects",
					"description": "Invoke action checkMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directorySettingTemplates/{{$parameter[\"directorySettingTemplate-id\"]}}/microsoft.graph.checkMemberObjects"
						}
					}
				},
				{
					"name": "Directory Setting Templates Directory Setting Template Get Member Groups",
					"value": "Directory Setting Templates Directory Setting Template Get Member Groups",
					"action": "Invoke action getMemberGroups",
					"description": "Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directorySettingTemplates/{{$parameter[\"directorySettingTemplate-id\"]}}/microsoft.graph.getMemberGroups"
						}
					}
				},
				{
					"name": "Directory Setting Templates Directory Setting Template Get Member Objects",
					"value": "Directory Setting Templates Directory Setting Template Get Member Objects",
					"action": "Invoke action getMemberObjects",
					"description": "Invoke action getMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directorySettingTemplates/{{$parameter[\"directorySettingTemplate-id\"]}}/microsoft.graph.getMemberObjects"
						}
					}
				},
				{
					"name": "Directory Setting Templates Directory Setting Template Restore",
					"value": "Directory Setting Templates Directory Setting Template Restore",
					"action": "Invoke action restore",
					"description": "Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. If an item was accidentally deleted, you can fully restore the item. This is not applicable to security groups, which are deleted permanently. A recently deleted item will remain available for up to 30 days. After 30 days, the item is permanently deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directorySettingTemplates/{{$parameter[\"directorySettingTemplate-id\"]}}/microsoft.graph.restore"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /directorySettingTemplates/microsoft.graph.getByIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Get By Ids"
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Get By Ids"
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /directorySettingTemplates/microsoft.graph.getUserOwnedObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Get User Owned Objects"
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "User ID",
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /directorySettingTemplates/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Validate Properties"
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Validate Properties"
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Validate Properties"
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "On Behalf Of User ID",
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /directorySettingTemplates/{directorySettingTemplate-id}/microsoft.graph.checkMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Check Member Groups"
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /directorySettingTemplates/{directorySettingTemplate-id}/microsoft.graph.checkMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Check Member Objects"
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /directorySettingTemplates/{directorySettingTemplate-id}/microsoft.graph.getMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Get Member Groups"
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /directorySettingTemplates/{directorySettingTemplate-id}/microsoft.graph.getMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Get Member Objects"
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
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /directorySettingTemplates/{directorySettingTemplate-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Actions"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Restore"
					]
				}
			}
		},
];
