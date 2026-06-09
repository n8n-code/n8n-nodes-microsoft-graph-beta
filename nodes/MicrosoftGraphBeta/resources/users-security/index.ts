import type { INodeProperties } from 'n8n-workflow';

export const usersSecurityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Security",
					"value": "Users Delete Security",
					"action": "Delete navigation property security for users",
					"description": "Delete navigation property security for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security"
						}
					}
				},
				{
					"name": "Users Get Security",
					"value": "Users Get Security",
					"action": "Get security from users",
					"description": "Get security from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security"
						}
					}
				},
				{
					"name": "Users Update Security",
					"value": "Users Update Security",
					"action": "Update the navigation property security in users",
					"description": "Update the navigation property security in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security"
						}
					}
				},
				{
					"name": "Users Security Delete Information Protection",
					"value": "Users Security Delete Information Protection",
					"action": "Delete navigation property informationProtection for users",
					"description": "Delete navigation property informationProtection for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection"
						}
					}
				},
				{
					"name": "Users Security Get Information Protection",
					"value": "Users Security Get Information Protection",
					"action": "Get informationProtection from users",
					"description": "Get informationProtection from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection"
						}
					}
				},
				{
					"name": "Users Security Update Information Protection",
					"value": "Users Security Update Information Protection",
					"action": "Update the navigation property informationProtection in users",
					"description": "Update the navigation property informationProtection in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection"
						}
					}
				},
				{
					"name": "Users Security Information Protection Delete Label Policy Settings",
					"value": "Users Security Information Protection Delete Label Policy Settings",
					"action": "Delete navigation property labelPolicySettings for users",
					"description": "Delete navigation property labelPolicySettings for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/labelPolicySettings"
						}
					}
				},
				{
					"name": "Users Security Information Protection Get Label Policy Settings",
					"value": "Users Security Information Protection Get Label Policy Settings",
					"action": "Get informationProtectionPolicySetting",
					"description": "Read the properties and relationships of an informationProtectionPolicySetting object. The settings exposed by this API should be used in applications to populate the **moreInfoUrl** property for Microsoft Purview Information Protection help, and indicate whether labeling is mandatory for the user and whether justification must be provided on downgrade.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/labelPolicySettings"
						}
					}
				},
				{
					"name": "Users Security Information Protection Update Label Policy Settings",
					"value": "Users Security Information Protection Update Label Policy Settings",
					"action": "Update the navigation property labelPolicySettings in users",
					"description": "Update the navigation property labelPolicySettings in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/labelPolicySettings"
						}
					}
				},
				{
					"name": "Users Security Information Protection List Sensitivity Labels",
					"value": "Users Security Information Protection List Sensitivity Labels",
					"action": "List sensitivityLabels",
					"description": "Get a list of sensitivityLabel objects associated with a user or organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Users Security Information Protection Create Sensitivity Labels",
					"value": "Users Security Information Protection Create Sensitivity Labels",
					"action": "Create new navigation property to sensitivityLabels for users",
					"description": "Create new navigation property to sensitivityLabels for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Users Security Information Protection Delete Sensitivity Labels",
					"value": "Users Security Information Protection Delete Sensitivity Labels",
					"action": "Delete navigation property sensitivityLabels for users",
					"description": "Delete navigation property sensitivityLabels for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Users Security Information Protection Get Sensitivity Labels",
					"value": "Users Security Information Protection Get Sensitivity Labels",
					"action": "Get sensitivityLabels from users",
					"description": "Read the Microsoft Purview Information Protection labels for the user or organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Users Security Information Protection Update Sensitivity Labels",
					"value": "Users Security Information Protection Update Sensitivity Labels",
					"action": "Update the navigation property sensitivityLabels in users",
					"description": "Update the navigation property sensitivityLabels in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Users Security Information Protection Sensitivity Labels Delete Parent",
					"value": "Users Security Information Protection Sensitivity Labels Delete Parent",
					"action": "Delete navigation property parent for users",
					"description": "Delete navigation property parent for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/parent"
						}
					}
				},
				{
					"name": "Users Security Information Protection Sensitivity Labels Get Parent",
					"value": "Users Security Information Protection Sensitivity Labels Get Parent",
					"action": "Get parent from users",
					"description": "The parent label associated with a child label. Null if the label has no parent.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/parent"
						}
					}
				},
				{
					"name": "Users Security Information Protection Sensitivity Labels Update Parent",
					"value": "Users Security Information Protection Sensitivity Labels Update Parent",
					"action": "Update the navigation property parent in users",
					"description": "Update the navigation property parent in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/parent"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Delete Security"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Delete Security"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Get Security"
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
						"Users Security"
					],
					"operation": [
						"Users Get Security"
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
						"Users Security"
					],
					"operation": [
						"Users Get Security"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Update Security"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/security<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Update Security"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/security/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Delete Information Protection"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Delete Information Protection"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/security/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Get Information Protection"
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
						"Users Security"
					],
					"operation": [
						"Users Security Get Information Protection"
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
						"Users Security"
					],
					"operation": [
						"Users Security Get Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/security/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/security/informationProtection<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/security/informationProtection/labelPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Delete Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Delete Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/security/informationProtection/labelPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Get Label Policy Settings"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Get Label Policy Settings"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Get Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/security/informationProtection/labelPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Update Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/security/informationProtection/labelPolicySettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Update Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/security/informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection List Sensitivity Labels"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection List Sensitivity Labels"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection List Sensitivity Labels"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection List Sensitivity Labels"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection List Sensitivity Labels"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection List Sensitivity Labels"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection List Sensitivity Labels"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection List Sensitivity Labels"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/security/informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/security/informationProtection/sensitivityLabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Delete Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Delete Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Get Sensitivity Labels"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Get Sensitivity Labels"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Get Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Sensitivity Labels Delete Parent"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Sensitivity Labels Delete Parent"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Sensitivity Labels Get Parent"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Sensitivity Labels Get Parent"
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
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Sensitivity Labels Get Parent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Sensitivity Labels Update Parent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Security"
					],
					"operation": [
						"Users Security Information Protection Sensitivity Labels Update Parent"
					]
				}
			}
		},
];
