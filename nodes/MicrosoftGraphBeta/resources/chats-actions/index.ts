import type { INodeProperties } from 'n8n-workflow';

export const chatsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					]
				}
			},
			"options": [
				{
					"name": "Chats Chat Installed Apps Teams App Installation Upgrade",
					"value": "Chats Chat Installed Apps Teams App Installation Upgrade",
					"action": "Invoke action upgrade",
					"description": "Upgrade an app installation within a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/microsoft.graph.upgrade"
						}
					}
				},
				{
					"name": "Chats Chat Members Add",
					"value": "Chats Chat Members Add",
					"action": "Invoke action add",
					"description": "Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/members/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Chats Chat Messages Chat Message Set Reaction",
					"value": "Chats Chat Messages Chat Message Set Reaction",
					"action": "Invoke action setReaction",
					"description": "Invoke action setReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.setReaction"
						}
					}
				},
				{
					"name": "Chats Chat Messages Chat Message Soft Delete",
					"value": "Chats Chat Messages Chat Message Soft Delete",
					"action": "Invoke action softDelete",
					"description": "Delete a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.softDelete"
						}
					}
				},
				{
					"name": "Chats Chat Messages Chat Message Undo Soft Delete",
					"value": "Chats Chat Messages Chat Message Undo Soft Delete",
					"action": "Invoke action undoSoftDelete",
					"description": "Undo soft deletion of a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.undoSoftDelete"
						}
					}
				},
				{
					"name": "Chats Chat Messages Chat Message Unset Reaction",
					"value": "Chats Chat Messages Chat Message Unset Reaction",
					"action": "Invoke action unsetReaction",
					"description": "Invoke action unsetReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.unsetReaction"
						}
					}
				},
				{
					"name": "Chats Chat Messages Chat Message Replies Chat Message Set Reaction",
					"value": "Chats Chat Messages Chat Message Replies Chat Message Set Reaction",
					"action": "Invoke action setReaction",
					"description": "Invoke action setReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.setReaction"
						}
					}
				},
				{
					"name": "Chats Chat Messages Chat Message Replies Chat Message Soft Delete",
					"value": "Chats Chat Messages Chat Message Replies Chat Message Soft Delete",
					"action": "Invoke action softDelete",
					"description": "Delete a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.softDelete"
						}
					}
				},
				{
					"name": "Chats Chat Messages Chat Message Replies Chat Message Undo Soft Delete",
					"value": "Chats Chat Messages Chat Message Replies Chat Message Undo Soft Delete",
					"action": "Invoke action undoSoftDelete",
					"description": "Undo soft deletion of a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.undoSoftDelete"
						}
					}
				},
				{
					"name": "Chats Chat Messages Chat Message Replies Chat Message Unset Reaction",
					"value": "Chats Chat Messages Chat Message Replies Chat Message Unset Reaction",
					"action": "Invoke action unsetReaction",
					"description": "Invoke action unsetReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.unsetReaction"
						}
					}
				},
				{
					"name": "Chats Chat Hide For User",
					"value": "Chats Chat Hide For User",
					"action": "Invoke action hideForUser",
					"description": "Hide a chat for a user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/microsoft.graph.hideForUser"
						}
					}
				},
				{
					"name": "Chats Chat Mark Chat Read For User",
					"value": "Chats Chat Mark Chat Read For User",
					"action": "Invoke action markChatReadForUser",
					"description": "Mark a chat as read for a user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/microsoft.graph.markChatReadForUser"
						}
					}
				},
				{
					"name": "Chats Chat Mark Chat Unread For User",
					"value": "Chats Chat Mark Chat Unread For User",
					"action": "Invoke action markChatUnreadForUser",
					"description": "Mark a chat as unread for a user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/microsoft.graph.markChatUnreadForUser"
						}
					}
				},
				{
					"name": "Chats Chat Send Activity Notification",
					"value": "Chats Chat Send Activity Notification",
					"action": "Invoke action sendActivityNotification",
					"description": "Send an activity feed notification in scope of a chat. For more details about sending notifications and the requirements for doing so, see sending Teams activity notifications.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/microsoft.graph.sendActivityNotification"
						}
					}
				},
				{
					"name": "Chats Chat Unhide For User",
					"value": "Chats Chat Unhide For User",
					"action": "Invoke action unhideForUser",
					"description": "Unhide a chat for a user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/microsoft.graph.unhideForUser"
						}
					}
				},
				{
					"name": "Chats Chat Permission Grants Get By Ids",
					"value": "Chats Chat Permission Grants Get By Ids",
					"action": "Invoke action getByIds",
					"description": "Return the directory objects specified in a list of IDs. Some common uses for this function are to:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/microsoft.graph.getByIds"
						}
					}
				},
				{
					"name": "Chats Chat Permission Grants Get User Owned Objects",
					"value": "Chats Chat Permission Grants Get User Owned Objects",
					"action": "Invoke action getUserOwnedObjects",
					"description": "Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/microsoft.graph.getUserOwnedObjects"
						}
					}
				},
				{
					"name": "Chats Chat Permission Grants Validate Properties",
					"value": "Chats Chat Permission Grants Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate that a Microsoft 365 group's display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to **create** a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties: \n1. Validate the prefix and suffix naming policy\n2. Validate the custom banned words policy\n3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/microsoft.graph.validateProperties"
						}
					}
				},
				{
					"name": "Chats Chat Permission Grants Resource Specific Permission Grant Check Member Groups",
					"value": "Chats Chat Permission Grants Resource Specific Permission Grant Check Member Groups",
					"action": "Invoke action checkMemberGroups",
					"description": "Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.checkMemberGroups"
						}
					}
				},
				{
					"name": "Chats Chat Permission Grants Resource Specific Permission Grant Check Member Objects",
					"value": "Chats Chat Permission Grants Resource Specific Permission Grant Check Member Objects",
					"action": "Invoke action checkMemberObjects",
					"description": "Invoke action checkMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.checkMemberObjects"
						}
					}
				},
				{
					"name": "Chats Chat Permission Grants Resource Specific Permission Grant Get Member Groups",
					"value": "Chats Chat Permission Grants Resource Specific Permission Grant Get Member Groups",
					"action": "Invoke action getMemberGroups",
					"description": "Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.getMemberGroups"
						}
					}
				},
				{
					"name": "Chats Chat Permission Grants Resource Specific Permission Grant Get Member Objects",
					"value": "Chats Chat Permission Grants Resource Specific Permission Grant Get Member Objects",
					"action": "Invoke action getMemberObjects",
					"description": "Invoke action getMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.getMemberObjects"
						}
					}
				},
				{
					"name": "Chats Chat Permission Grants Resource Specific Permission Grant Restore",
					"value": "Chats Chat Permission Grants Resource Specific Permission Grant Restore",
					"action": "Invoke action restore",
					"description": "Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. If an item was accidentally deleted, you can fully restore the item. This is not applicable to security groups, which are deleted permanently. A recently deleted item will remain available for up to 30 days. After 30 days, the item is permanently deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.restore"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/microsoft.graph.upgrade",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Installed Apps Teams App Installation Upgrade"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/members/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Members Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Members Add"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/microsoft.graph.setReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/microsoft.graph.softDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/microsoft.graph.undoSoftDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Undo Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/microsoft.graph.unsetReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.setReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Replies Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Replies Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.softDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Replies Chat Message Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.undoSoftDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Replies Chat Message Undo Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.unsetReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Replies Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Messages Chat Message Replies Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/microsoft.graph.hideForUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Hide For User"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Hide For User"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "user",
			"type": "string",
			"default": {
				"@odata.type": "#microsoft.graph.teamworkUserIdentity"
			},
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Hide For User"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/microsoft.graph.markChatReadForUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Mark Chat Read For User"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Mark Chat Read For User"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "user",
			"type": "string",
			"default": {
				"@odata.type": "#microsoft.graph.teamworkUserIdentity"
			},
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Mark Chat Read For User"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/microsoft.graph.markChatUnreadForUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Mark Chat Unread For User"
					]
				}
			}
		},
		{
			"displayName": "Last Message Read Date Time",
			"name": "lastMessageReadDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "lastMessageReadDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Mark Chat Unread For User"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Mark Chat Unread For User"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "user",
			"type": "string",
			"default": {
				"@odata.type": "#microsoft.graph.teamworkUserIdentity"
			},
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Mark Chat Unread For User"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/microsoft.graph.sendActivityNotification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Activity Type",
			"name": "activityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "activityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Preview Text",
			"name": "previewText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "previewText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Recipient",
			"name": "recipient",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "recipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Template Parameters",
			"name": "templateParameters",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "templateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Topic",
			"name": "topic",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "topic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/microsoft.graph.unhideForUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Unhide For User"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Unhide For User"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "user",
			"type": "string",
			"default": {
				"@odata.type": "#microsoft.graph.teamworkUserIdentity"
			},
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Unhide For User"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/permissionGrants/microsoft.graph.getByIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Get By Ids"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Get By Ids"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/permissionGrants/microsoft.graph.getUserOwnedObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Get User Owned Objects"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Get User Owned Objects"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/permissionGrants/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Validate Properties"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Validate Properties"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Validate Properties"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Validate Properties"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.checkMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Resource Specific Permission Grant Check Member Groups"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Resource Specific Permission Grant Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.checkMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Resource Specific Permission Grant Check Member Objects"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Resource Specific Permission Grant Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.getMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Resource Specific Permission Grant Get Member Groups"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Resource Specific Permission Grant Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.getMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Resource Specific Permission Grant Get Member Objects"
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
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Resource Specific Permission Grant Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Actions"
					],
					"operation": [
						"Chats Chat Permission Grants Resource Specific Permission Grant Restore"
					]
				}
			}
		},
];
