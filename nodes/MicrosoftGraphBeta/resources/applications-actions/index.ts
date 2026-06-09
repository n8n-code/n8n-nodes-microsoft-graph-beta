import type { INodeProperties } from 'n8n-workflow';

export const applicationsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					]
				}
			},
			"options": [
				{
					"name": "Applications Get By Ids",
					"value": "Applications Get By Ids",
					"action": "Invoke action getByIds",
					"description": "Return the directory objects specified in a list of IDs. Some common uses for this function are to:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/microsoft.graph.getByIds"
						}
					}
				},
				{
					"name": "Applications Get User Owned Objects",
					"value": "Applications Get User Owned Objects",
					"action": "Invoke action getUserOwnedObjects",
					"description": "Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/microsoft.graph.getUserOwnedObjects"
						}
					}
				},
				{
					"name": "Applications Validate Properties",
					"value": "Applications Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate that a Microsoft 365 group's display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to **create** a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties: \n1. Validate the prefix and suffix naming policy\n2. Validate the custom banned words policy\n3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/microsoft.graph.validateProperties"
						}
					}
				},
				{
					"name": "Applications Application Add Key",
					"value": "Applications Application Add Key",
					"action": "Invoke action addKey",
					"description": "Add a key credential to an application. This method, along with removeKey, can be used by an application to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.  Applications that don’t have any existing valid certificates (no certificates have been added yet, or all certificates have expired), won’t be able to use this service action. You can use the Update application operation to perform an update instead.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.addKey"
						}
					}
				},
				{
					"name": "Applications Application Add Password",
					"value": "Applications Application Add Password",
					"action": "Invoke action addPassword",
					"description": "Adds a strong password to an application.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.addPassword"
						}
					}
				},
				{
					"name": "Applications Application Check Member Groups",
					"value": "Applications Application Check Member Groups",
					"action": "Invoke action checkMemberGroups",
					"description": "Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.checkMemberGroups"
						}
					}
				},
				{
					"name": "Applications Application Check Member Objects",
					"value": "Applications Application Check Member Objects",
					"action": "Invoke action checkMemberObjects",
					"description": "Invoke action checkMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.checkMemberObjects"
						}
					}
				},
				{
					"name": "Applications Application Get Member Groups",
					"value": "Applications Application Get Member Groups",
					"action": "Invoke action getMemberGroups",
					"description": "Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.getMemberGroups"
						}
					}
				},
				{
					"name": "Applications Application Get Member Objects",
					"value": "Applications Application Get Member Objects",
					"action": "Invoke action getMemberObjects",
					"description": "Invoke action getMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.getMemberObjects"
						}
					}
				},
				{
					"name": "Applications Application Remove Key",
					"value": "Applications Application Remove Key",
					"action": "Invoke action removeKey",
					"description": "Remove a key credential from an application. This method along with addKey can be used by an application to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.removeKey"
						}
					}
				},
				{
					"name": "Applications Application Remove Password",
					"value": "Applications Application Remove Password",
					"action": "Invoke action removePassword",
					"description": "Removes a password from an application.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.removePassword"
						}
					}
				},
				{
					"name": "Applications Application Restore",
					"value": "Applications Application Restore",
					"action": "Invoke action restore",
					"description": "Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. If an item was accidentally deleted, you can fully restore the item. This is not applicable to security groups, which are deleted permanently. A recently deleted item will remain available for up to 30 days. After 30 days, the item is permanently deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Applications Application Set Verified Publisher",
					"value": "Applications Application Set Verified Publisher",
					"action": "Invoke action setVerifiedPublisher",
					"description": "Set the the verifiedPublisher on an application. For more information, including prerequisites to setting a verified publisher, see Publisher verification.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.setVerifiedPublisher"
						}
					}
				},
				{
					"name": "Applications Application Unset Verified Publisher",
					"value": "Applications Application Unset Verified Publisher",
					"action": "Invoke action unsetVerifiedPublisher",
					"description": "Unset the the verifiedPublisher previously set on an application, removing all verified publisher properties. For more information, see Publisher verification.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/microsoft.graph.unsetVerifiedPublisher"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Jobs Validate Credentials",
					"value": "Applications Application Synchronization Jobs Validate Credentials",
					"action": "Invoke action validateCredentials",
					"description": "Invoke action validateCredentials",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/microsoft.graph.validateCredentials"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Jobs Synchronization Job Pause",
					"value": "Applications Application Synchronization Jobs Synchronization Job Pause",
					"action": "Invoke action pause",
					"description": "Temporarily stop a running synchronization job. All the progress, including job state, is persisted, and the job will continue from where it left off when a start call is made.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/microsoft.graph.pause"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Jobs Synchronization Job Provision On Demand",
					"value": "Applications Application Synchronization Jobs Synchronization Job Provision On Demand",
					"action": "Invoke action provisionOnDemand",
					"description": "Select a user and provision the account on-demand. The rate limit for this API is 5 requests per 10 seconds. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/microsoft.graph.provisionOnDemand"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Jobs Synchronization Job Restart",
					"value": "Applications Application Synchronization Jobs Synchronization Job Restart",
					"action": "Invoke action restart",
					"description": "Restart a stopped synchronization job, forcing it to reprocess all the objects in the directory. Optionally clears existing the synchronization state and previous errors.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/microsoft.graph.restart"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Jobs Synchronization Job Start",
					"value": "Applications Application Synchronization Jobs Synchronization Job Start",
					"action": "Invoke action start",
					"description": "Start an existing synchronization job. If the job is in a paused state, it will continue processing changes from the point where it was paused. If the job is in quarantine, the quarantine status will be cleared. Do not create scripts to call the start job continuously while it's running because that can cause the service to stop running. Use the start job only when the job is currently paused or in quarantine. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/microsoft.graph.start"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Jobs Synchronization Job Stop",
					"value": "Applications Application Synchronization Jobs Synchronization Job Stop",
					"action": "Invoke action stop",
					"description": "Invoke action stop",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/microsoft.graph.stop"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Jobs Synchronization Job Validate Credentials",
					"value": "Applications Application Synchronization Jobs Synchronization Job Validate Credentials",
					"action": "Invoke action validateCredentials",
					"description": "Validate that the credentials are valid in the tenant.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/microsoft.graph.validateCredentials"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Jobs Synchronization Job Schema Directories Directory Definition Discover",
					"value": "Applications Application Synchronization Jobs Synchronization Job Schema Directories Directory Definition Discover",
					"action": "Invoke action discover",
					"description": "Discover the latest schema definition for provisioning to an application. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}/microsoft.graph.discover"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Jobs Synchronization Job Schema Parse Expression",
					"value": "Applications Application Synchronization Jobs Synchronization Job Schema Parse Expression",
					"action": "Invoke action parseExpression",
					"description": "Parse a given string expression into an attributeMappingSource object. For more information about expressions, see Writing Expressions for Attribute Mappings in Azure Active Directory.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/jobs/{{$parameter[\"synchronizationJob-id\"]}}/schema/microsoft.graph.parseExpression"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Acquire Access Token",
					"value": "Applications Application Synchronization Acquire Access Token",
					"action": "Invoke action acquireAccessToken",
					"description": "Acquire an OAuth Access token to authorize the Azure AD provisioning service to provision users into an application.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/microsoft.graph.acquireAccessToken"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Templates Synchronization Template Schema Directories Directory Definition Discover",
					"value": "Applications Application Synchronization Templates Synchronization Template Schema Directories Directory Definition Discover",
					"action": "Invoke action discover",
					"description": "Discover the latest schema definition for provisioning to an application. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/directories/{{$parameter[\"directoryDefinition-id\"]}}/microsoft.graph.discover"
						}
					}
				},
				{
					"name": "Applications Application Synchronization Templates Synchronization Template Schema Parse Expression",
					"value": "Applications Application Synchronization Templates Synchronization Template Schema Parse Expression",
					"action": "Invoke action parseExpression",
					"description": "Parse a given string expression into an attributeMappingSource object. For more information about expressions, see Writing Expressions for Attribute Mappings in Azure Active Directory.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/synchronization/templates/{{$parameter[\"synchronizationTemplate-id\"]}}/schema/microsoft.graph.parseExpression"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /applications/microsoft.graph.getByIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Get By Ids"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Get By Ids"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/microsoft.graph.getUserOwnedObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Get User Owned Objects"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Get User Owned Objects"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Validate Properties"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Validate Properties"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Validate Properties"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Validate Properties"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.addKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Add Key"
					]
				}
			}
		},
		{
			"displayName": "Key Credential",
			"name": "keyCredential",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "keyCredential",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Add Key"
					]
				}
			}
		},
		{
			"displayName": "Password Credential",
			"name": "passwordCredential",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "passwordCredential",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Add Key"
					]
				}
			}
		},
		{
			"displayName": "Proof",
			"name": "proof",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "proof",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Add Key"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.addPassword",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Add Password"
					]
				}
			}
		},
		{
			"displayName": "Password Credential",
			"name": "passwordCredential",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "passwordCredential",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Add Password"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.checkMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Check Member Groups"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Application Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.checkMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Check Member Objects"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Application Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.getMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Get Member Groups"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Application Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.getMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Get Member Objects"
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
						"Applications Actions"
					],
					"operation": [
						"Applications Application Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.removeKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Remove Key"
					]
				}
			}
		},
		{
			"displayName": "Key Id",
			"name": "keyId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "keyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Remove Key"
					]
				}
			}
		},
		{
			"displayName": "Proof",
			"name": "proof",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "proof",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Remove Key"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.removePassword",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Remove Password"
					]
				}
			}
		},
		{
			"displayName": "Key Id",
			"name": "keyId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "keyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Remove Password"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.setVerifiedPublisher",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Set Verified Publisher"
					]
				}
			}
		},
		{
			"displayName": "Verified Publisher Id",
			"name": "verifiedPublisherId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "verifiedPublisherId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Set Verified Publisher"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/microsoft.graph.unsetVerifiedPublisher",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Unset Verified Publisher"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/microsoft.graph.validateCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Validate Credentials"
					]
				}
			}
		},
		{
			"displayName": "Application Identifier",
			"name": "applicationIdentifier",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "applicationIdentifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Validate Credentials"
					]
				}
			}
		},
		{
			"displayName": "Credentials",
			"name": "credentials",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "credentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Validate Credentials"
					]
				}
			}
		},
		{
			"displayName": "Template Id",
			"name": "templateId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "templateId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Validate Credentials"
					]
				}
			}
		},
		{
			"displayName": "Use Saved Credentials",
			"name": "useSavedCredentials",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "useSavedCredentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Validate Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/microsoft.graph.pause",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Pause"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/microsoft.graph.provisionOnDemand",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Provision On Demand"
					]
				}
			}
		},
		{
			"displayName": "Parameters",
			"name": "parameters",
			"type": "json",
			"default": "[\n  {\n    \"subjects\": [\n      {\n        \"links\": {\n          \"manager\": {},\n          \"members\": [\n            {}\n          ],\n          \"owners\": [\n            {}\n          ]\n        }\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "parameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Provision On Demand"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/microsoft.graph.restart",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Restart"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Restart"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/microsoft.graph.start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Start"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/microsoft.graph.stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Stop"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/microsoft.graph.validateCredentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Validate Credentials"
					]
				}
			}
		},
		{
			"displayName": "Application Identifier",
			"name": "applicationIdentifier",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "applicationIdentifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Validate Credentials"
					]
				}
			}
		},
		{
			"displayName": "Credentials",
			"name": "credentials",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "credentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Validate Credentials"
					]
				}
			}
		},
		{
			"displayName": "Template Id",
			"name": "templateId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "templateId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Validate Credentials"
					]
				}
			}
		},
		{
			"displayName": "Use Saved Credentials",
			"name": "useSavedCredentials",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "useSavedCredentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Validate Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/microsoft.graph.discover",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Schema Directories Directory Definition Discover"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/microsoft.graph.parseExpression",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Schema Parse Expression"
					]
				}
			}
		},
		{
			"displayName": "Expression",
			"name": "expression",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expression",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Schema Parse Expression"
					]
				}
			}
		},
		{
			"displayName": "Target Attribute Definition",
			"name": "targetAttributeDefinition",
			"type": "json",
			"default": "{\n  \"apiExpressions\": [\n    {}\n  ],\n  \"metadata\": [\n    {}\n  ],\n  \"referencedObjects\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "targetAttributeDefinition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Schema Parse Expression"
					]
				}
			}
		},
		{
			"displayName": "Test Input Object",
			"name": "testInputObject",
			"type": "json",
			"default": "{\n  \"definition\": {\n    \"attributes\": [\n      {\n        \"apiExpressions\": [\n          {}\n        ],\n        \"metadata\": [\n          {}\n        ],\n        \"referencedObjects\": [\n          {}\n        ]\n      }\n    ],\n    \"metadata\": [\n      {}\n    ],\n    \"supportedApis\": [\n      null\n    ]\n  },\n  \"properties\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "testInputObject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Jobs Synchronization Job Schema Parse Expression"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/microsoft.graph.acquireAccessToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Acquire Access Token"
					]
				}
			}
		},
		{
			"displayName": "Credentials",
			"name": "credentials",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "credentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Acquire Access Token"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}/microsoft.graph.discover",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Templates Synchronization Template Schema Directories Directory Definition Discover"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/microsoft.graph.parseExpression",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Templates Synchronization Template Schema Parse Expression"
					]
				}
			}
		},
		{
			"displayName": "Expression",
			"name": "expression",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expression",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Templates Synchronization Template Schema Parse Expression"
					]
				}
			}
		},
		{
			"displayName": "Target Attribute Definition",
			"name": "targetAttributeDefinition",
			"type": "json",
			"default": "{\n  \"apiExpressions\": [\n    {}\n  ],\n  \"metadata\": [\n    {}\n  ],\n  \"referencedObjects\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "targetAttributeDefinition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Templates Synchronization Template Schema Parse Expression"
					]
				}
			}
		},
		{
			"displayName": "Test Input Object",
			"name": "testInputObject",
			"type": "json",
			"default": "{\n  \"definition\": {\n    \"attributes\": [\n      {\n        \"apiExpressions\": [\n          {}\n        ],\n        \"metadata\": [\n          {}\n        ],\n        \"referencedObjects\": [\n          {}\n        ]\n      }\n    ],\n    \"metadata\": [\n      {}\n    ],\n    \"supportedApis\": [\n      null\n    ]\n  },\n  \"properties\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "testInputObject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Actions"
					],
					"operation": [
						"Applications Application Synchronization Templates Synchronization Template Schema Parse Expression"
					]
				}
			}
		},
];
