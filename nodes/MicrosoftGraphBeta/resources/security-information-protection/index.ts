import type { INodeProperties } from 'n8n-workflow';

export const securityInformationProtectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					]
				}
			},
			"options": [
				{
					"name": "Security Delete Information Protection",
					"value": "Security Delete Information Protection",
					"action": "Delete navigation property informationProtection for security",
					"description": "Delete navigation property informationProtection for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/informationProtection"
						}
					}
				},
				{
					"name": "Security Get Information Protection",
					"value": "Security Get Information Protection",
					"action": "Get informationProtection from security",
					"description": "Get informationProtection from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/informationProtection"
						}
					}
				},
				{
					"name": "Security Update Information Protection",
					"value": "Security Update Information Protection",
					"action": "Update the navigation property informationProtection in security",
					"description": "Update the navigation property informationProtection in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/informationProtection"
						}
					}
				},
				{
					"name": "Security Information Protection Delete Label Policy Settings",
					"value": "Security Information Protection Delete Label Policy Settings",
					"action": "Delete navigation property labelPolicySettings for security",
					"description": "Delete navigation property labelPolicySettings for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/informationProtection/labelPolicySettings"
						}
					}
				},
				{
					"name": "Security Information Protection Get Label Policy Settings",
					"value": "Security Information Protection Get Label Policy Settings",
					"action": "Get informationProtectionPolicySetting",
					"description": "Read the properties and relationships of an informationProtectionPolicySetting object. The settings exposed by this API should be used in applications to populate the **moreInfoUrl** property for Microsoft Purview Information Protection help, and indicate whether labeling is mandatory for the user and whether justification must be provided on downgrade.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/informationProtection/labelPolicySettings"
						}
					}
				},
				{
					"name": "Security Information Protection Update Label Policy Settings",
					"value": "Security Information Protection Update Label Policy Settings",
					"action": "Update the navigation property labelPolicySettings in security",
					"description": "Update the navigation property labelPolicySettings in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/informationProtection/labelPolicySettings"
						}
					}
				},
				{
					"name": "Security Information Protection List Sensitivity Labels",
					"value": "Security Information Protection List Sensitivity Labels",
					"action": "List sensitivityLabels",
					"description": "Get a list of sensitivityLabel objects associated with a user or organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Security Information Protection Create Sensitivity Labels",
					"value": "Security Information Protection Create Sensitivity Labels",
					"action": "Create new navigation property to sensitivityLabels for security",
					"description": "Create new navigation property to sensitivityLabels for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Security Information Protection Delete Sensitivity Labels",
					"value": "Security Information Protection Delete Sensitivity Labels",
					"action": "Delete navigation property sensitivityLabels for security",
					"description": "Delete navigation property sensitivityLabels for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Security Information Protection Get Sensitivity Labels",
					"value": "Security Information Protection Get Sensitivity Labels",
					"action": "Get sensitivityLabels from security",
					"description": "Read the Microsoft Purview Information Protection labels for the user or organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Security Information Protection Update Sensitivity Labels",
					"value": "Security Information Protection Update Sensitivity Labels",
					"action": "Update the navigation property sensitivityLabels in security",
					"description": "Update the navigation property sensitivityLabels in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Security Information Protection Sensitivity Labels Delete Parent",
					"value": "Security Information Protection Sensitivity Labels Delete Parent",
					"action": "Delete navigation property parent for security",
					"description": "Delete navigation property parent for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/parent"
						}
					}
				},
				{
					"name": "Security Information Protection Sensitivity Labels Get Parent",
					"value": "Security Information Protection Sensitivity Labels Get Parent",
					"action": "Get parent from security",
					"description": "The parent label associated with a child label. Null if the label has no parent.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/parent"
						}
					}
				},
				{
					"name": "Security Information Protection Sensitivity Labels Update Parent",
					"value": "Security Information Protection Sensitivity Labels Update Parent",
					"action": "Update the navigation property parent in security",
					"description": "Update the navigation property parent in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/parent"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /security/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Delete Information Protection"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Delete Information Protection"
					]
				}
			}
		},
		{
			"displayName": "GET /security/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Get Information Protection"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Get Information Protection"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Get Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/informationProtection<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/informationProtection/labelPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Delete Label Policy Settings"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Delete Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /security/informationProtection/labelPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Get Label Policy Settings"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Get Label Policy Settings"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Get Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/informationProtection/labelPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Update Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/informationProtection/labelPolicySettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Update Label Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /security/informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection List Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection List Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection List Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection List Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection List Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection List Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection List Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection List Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /security/informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /security/informationProtection/sensitivityLabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Delete Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Delete Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Get Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Get Sensitivity Labels"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Get Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Delete Parent"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Delete Parent"
					]
				}
			}
		},
		{
			"displayName": "GET /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Get Parent"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Get Parent"
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
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Get Parent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Update Parent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Information Protection"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Update Parent"
					]
				}
			}
		},
];
