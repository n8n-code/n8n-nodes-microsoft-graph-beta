import type { INodeProperties } from 'n8n-workflow';

export const identityProtectionRiskyServicePrincipalDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					]
				}
			},
			"options": [
				{
					"name": "Identity Protection List Risky Service Principals",
					"value": "Identity Protection List Risky Service Principals",
					"action": "List riskyServicePrincipals",
					"description": "Retrieve the properties and relationships of riskyServicePrincipal objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/riskyServicePrincipals"
						}
					}
				},
				{
					"name": "Identity Protection Create Risky Service Principals",
					"value": "Identity Protection Create Risky Service Principals",
					"action": "Create new navigation property to riskyServicePrincipals for identityProtection",
					"description": "Create new navigation property to riskyServicePrincipals for identityProtection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityProtection/riskyServicePrincipals"
						}
					}
				},
				{
					"name": "Identity Protection Delete Risky Service Principals",
					"value": "Identity Protection Delete Risky Service Principals",
					"action": "Delete navigation property riskyServicePrincipals for identityProtection",
					"description": "Delete navigation property riskyServicePrincipals for identityProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityProtection/riskyServicePrincipals/{{$parameter[\"riskyServicePrincipal-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Get Risky Service Principals",
					"value": "Identity Protection Get Risky Service Principals",
					"action": "Get riskyServicePrincipals from identityProtection",
					"description": "Azure AD service principals that are at risk.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/riskyServicePrincipals/{{$parameter[\"riskyServicePrincipal-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Update Risky Service Principals",
					"value": "Identity Protection Update Risky Service Principals",
					"action": "Update the navigation property riskyServicePrincipals in identityProtection",
					"description": "Update the navigation property riskyServicePrincipals in identityProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityProtection/riskyServicePrincipals/{{$parameter[\"riskyServicePrincipal-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Risky Service Principals List History",
					"value": "Identity Protection Risky Service Principals List History",
					"action": "List history (risk history of riskyServicePrincipal)",
					"description": "Get the risk history of a riskyServicePrincipal object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/riskyServicePrincipals/{{$parameter[\"riskyServicePrincipal-id\"]}}/history"
						}
					}
				},
				{
					"name": "Identity Protection Risky Service Principals Create History",
					"value": "Identity Protection Risky Service Principals Create History",
					"action": "Create new navigation property to history for identityProtection",
					"description": "Create new navigation property to history for identityProtection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityProtection/riskyServicePrincipals/{{$parameter[\"riskyServicePrincipal-id\"]}}/history"
						}
					}
				},
				{
					"name": "Identity Protection Risky Service Principals Delete History",
					"value": "Identity Protection Risky Service Principals Delete History",
					"action": "Delete navigation property history for identityProtection",
					"description": "Delete navigation property history for identityProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityProtection/riskyServicePrincipals/{{$parameter[\"riskyServicePrincipal-id\"]}}/history/{{$parameter[\"riskyServicePrincipalHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Risky Service Principals Get History",
					"value": "Identity Protection Risky Service Principals Get History",
					"action": "Get history from identityProtection",
					"description": "Represents the risk history of Azure AD service principals.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/riskyServicePrincipals/{{$parameter[\"riskyServicePrincipal-id\"]}}/history/{{$parameter[\"riskyServicePrincipalHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Risky Service Principals Update History",
					"value": "Identity Protection Risky Service Principals Update History",
					"action": "Update the navigation property history in identityProtection",
					"description": "Update the navigation property history in identityProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityProtection/riskyServicePrincipals/{{$parameter[\"riskyServicePrincipal-id\"]}}/history/{{$parameter[\"riskyServicePrincipalHistoryItem-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identityProtection/riskyServicePrincipals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection List Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection List Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection List Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection List Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection List Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection List Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection List Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection List Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection List Risky Service Principals"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyServicePrincipals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Create Risky Service Principals"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyServicePrincipals<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Create Risky Service Principals"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Delete Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Delete Risky Service Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Get Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Get Risky Service Principals"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Get Risky Service Principals"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Update Risky Service Principals"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Update Risky Service Principals"
					]
				}
			}
		},
		{
			"displayName": "GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals List History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals List History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals List History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals List History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals List History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals List History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals List History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals List History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals List History"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals Create History"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals Create History"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals Delete History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals Delete History"
					]
				}
			}
		},
		{
			"displayName": "GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals Get History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals Get History"
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
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals Get History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals Update History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky Service Principal"
					],
					"operation": [
						"Identity Protection Risky Service Principals Update History"
					]
				}
			}
		},
];
