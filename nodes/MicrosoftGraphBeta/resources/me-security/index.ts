import type { INodeProperties } from 'n8n-workflow';

export const meSecurityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Security",
					"value": "Me Delete Security",
					"action": "Delete navigation property security for me",
					"description": "Delete navigation property security for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/security"
						}
					}
				},
				{
					"name": "Me Get Security",
					"value": "Me Get Security",
					"action": "Get security from me",
					"description": "Get security from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/security"
						}
					}
				},
				{
					"name": "Me Update Security",
					"value": "Me Update Security",
					"action": "Update the navigation property security in me",
					"description": "Update the navigation property security in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/security"
						}
					}
				},
				{
					"name": "Me Security Delete Information Protection",
					"value": "Me Security Delete Information Protection",
					"action": "Delete navigation property informationProtection for me",
					"description": "Delete navigation property informationProtection for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/security/informationProtection"
						}
					}
				},
				{
					"name": "Me Security Get Information Protection",
					"value": "Me Security Get Information Protection",
					"action": "Get informationProtection from me",
					"description": "Get informationProtection from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/security/informationProtection"
						}
					}
				},
				{
					"name": "Me Security Update Information Protection",
					"value": "Me Security Update Information Protection",
					"action": "Update the navigation property informationProtection in me",
					"description": "Update the navigation property informationProtection in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/security/informationProtection"
						}
					}
				},
				{
					"name": "Me Security Information Protection Delete Label Policy Settings",
					"value": "Me Security Information Protection Delete Label Policy Settings",
					"action": "Delete navigation property labelPolicySettings for me",
					"description": "Delete navigation property labelPolicySettings for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/security/informationProtection/labelPolicySettings"
						}
					}
				},
				{
					"name": "Me Security Information Protection Get Label Policy Settings",
					"value": "Me Security Information Protection Get Label Policy Settings",
					"action": "Get informationProtectionPolicySetting",
					"description": "Read the properties and relationships of an informationProtectionPolicySetting object. The settings exposed by this API should be used in applications to populate the **moreInfoUrl** property for Microsoft Purview Information Protection help, and indicate whether labeling is mandatory for the user and whether justification must be provided on downgrade.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/security/informationProtection/labelPolicySettings"
						}
					}
				},
				{
					"name": "Me Security Information Protection Update Label Policy Settings",
					"value": "Me Security Information Protection Update Label Policy Settings",
					"action": "Update the navigation property labelPolicySettings in me",
					"description": "Update the navigation property labelPolicySettings in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/security/informationProtection/labelPolicySettings"
						}
					}
				},
				{
					"name": "Me Security Information Protection List Sensitivity Labels",
					"value": "Me Security Information Protection List Sensitivity Labels",
					"action": "List sensitivityLabels",
					"description": "Get a list of sensitivityLabel objects associated with a user or organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/security/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Me Security Information Protection Create Sensitivity Labels",
					"value": "Me Security Information Protection Create Sensitivity Labels",
					"action": "Create new navigation property to sensitivityLabels for me",
					"description": "Create new navigation property to sensitivityLabels for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/security/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Me Security Information Protection Delete Sensitivity Labels",
					"value": "Me Security Information Protection Delete Sensitivity Labels",
					"action": "Delete navigation property sensitivityLabels for me",
					"description": "Delete navigation property sensitivityLabels for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Me Security Information Protection Get Sensitivity Labels",
					"value": "Me Security Information Protection Get Sensitivity Labels",
					"action": "Get sensitivityLabels from me",
					"description": "Read the Microsoft Purview Information Protection labels for the user or organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Me Security Information Protection Update Sensitivity Labels",
					"value": "Me Security Information Protection Update Sensitivity Labels",
					"action": "Update the navigation property sensitivityLabels in me",
					"description": "Update the navigation property sensitivityLabels in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Me Security Information Protection Sensitivity Labels Delete Parent",
					"value": "Me Security Information Protection Sensitivity Labels Delete Parent",
					"action": "Delete navigation property parent for me",
					"description": "Delete navigation property parent for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/parent"
						}
					}
				},
				{
					"name": "Me Security Information Protection Sensitivity Labels Get Parent",
					"value": "Me Security Information Protection Sensitivity Labels Get Parent",
					"action": "Get parent from me",
					"description": "The parent label associated with a child label. Null if the label has no parent.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/parent"
						}
					}
				},
				{
					"name": "Me Security Information Protection Sensitivity Labels Update Parent",
					"value": "Me Security Information Protection Sensitivity Labels Update Parent",
					"action": "Update the navigation property parent in me",
					"description": "Update the navigation property parent in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/parent"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Delete Security"
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
						"Me Security"
					],
					"operation": [
						"Me Delete Security"
					]
				}
			}
		},
		{
			"displayName": "GET /me/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Get Security"
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
						"Me Security"
					],
					"operation": [
						"Me Get Security"
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
						"Me Security"
					],
					"operation": [
						"Me Get Security"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Update Security"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/security<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Update Security"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/security/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Delete Information Protection"
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
						"Me Security"
					],
					"operation": [
						"Me Security Delete Information Protection"
					]
				}
			}
		},
		{
			"displayName": "GET /me/security/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Get Information Protection"
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
						"Me Security"
					],
					"operation": [
						"Me Security Get Information Protection"
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
						"Me Security"
					],
					"operation": [
						"Me Security Get Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/security/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/security/informationProtection<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/security/informationProtection/labelPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Delete Label Policy Settings"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Delete Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /me/security/informationProtection/labelPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Get Label Policy Settings"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Get Label Policy Settings"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Get Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/security/informationProtection/labelPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Update Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/security/informationProtection/labelPolicySettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Update Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /me/security/informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection List Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection List Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection List Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection List Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection List Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection List Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection List Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection List Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /me/security/informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /me/security/informationProtection/sensitivityLabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Delete Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Delete Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Get Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Get Sensitivity Labels"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Get Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Sensitivity Labels Delete Parent"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Sensitivity Labels Delete Parent"
					]
				}
			}
		},
		{
			"displayName": "GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Sensitivity Labels Get Parent"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Sensitivity Labels Get Parent"
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
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Sensitivity Labels Get Parent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Sensitivity Labels Update Parent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Security"
					],
					"operation": [
						"Me Security Information Protection Sensitivity Labels Update Parent"
					]
				}
			}
		},
];
