import type { INodeProperties } from 'n8n-workflow';

export const policiesActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Actions"
					]
				}
			},
			"options": [
				{
					"name": "Policies Authentication Strength Policies Authentication Strength Policy Update Allowed Combinations",
					"value": "Policies Authentication Strength Policies Authentication Strength Policy Update Allowed Combinations",
					"action": "Invoke action updateAllowedCombinations",
					"description": "Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/authenticationStrengthPolicies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/microsoft.graph.updateAllowedCombinations"
						}
					}
				},
				{
					"name": "Policies Cross Tenant Access Policy Default Reset To System Default",
					"value": "Policies Cross Tenant Access Policy Default Reset To System Default",
					"action": "Invoke action resetToSystemDefault",
					"description": "Reset any changes made to the default configuration in a cross-tenant access policy back to the system default.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/crossTenantAccessPolicy/default/microsoft.graph.resetToSystemDefault"
						}
					}
				},
				{
					"name": "Policies Feature Rollout Policies Feature Rollout Policy Applies To Get By Ids",
					"value": "Policies Feature Rollout Policies Feature Rollout Policy Applies To Get By Ids",
					"action": "Invoke action getByIds",
					"description": "Return the directory objects specified in a list of IDs. Some common uses for this function are to:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}/appliesTo/microsoft.graph.getByIds"
						}
					}
				},
				{
					"name": "Policies Feature Rollout Policies Feature Rollout Policy Applies To Get User Owned Objects",
					"value": "Policies Feature Rollout Policies Feature Rollout Policy Applies To Get User Owned Objects",
					"action": "Invoke action getUserOwnedObjects",
					"description": "Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}/appliesTo/microsoft.graph.getUserOwnedObjects"
						}
					}
				},
				{
					"name": "Policies Feature Rollout Policies Feature Rollout Policy Applies To Validate Properties",
					"value": "Policies Feature Rollout Policies Feature Rollout Policy Applies To Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate that a Microsoft 365 group's display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to **create** a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties: \n1. Validate the prefix and suffix naming policy\n2. Validate the custom banned words policy\n3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/featureRolloutPolicies/{{$parameter[\"featureRolloutPolicy-id\"]}}/appliesTo/microsoft.graph.validateProperties"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/microsoft.graph.updateAllowedCombinations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Actions"
					],
					"operation": [
						"Policies Authentication Strength Policies Authentication Strength Policy Update Allowed Combinations"
					]
				}
			}
		},
		{
			"displayName": "Allowed Combinations",
			"name": "allowedCombinations",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "allowedCombinations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Actions"
					],
					"operation": [
						"Policies Authentication Strength Policies Authentication Strength Policy Update Allowed Combinations"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/crossTenantAccessPolicy/default/microsoft.graph.resetToSystemDefault",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Actions"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Default Reset To System Default"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo/microsoft.graph.getByIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Get By Ids"
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
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Get By Ids"
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
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo/microsoft.graph.getUserOwnedObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Get User Owned Objects"
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
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Get User Owned Objects"
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
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Validate Properties"
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
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Validate Properties"
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
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Validate Properties"
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
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Validate Properties"
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
						"Policies Actions"
					],
					"operation": [
						"Policies Feature Rollout Policies Feature Rollout Policy Applies To Validate Properties"
					]
				}
			}
		},
];
