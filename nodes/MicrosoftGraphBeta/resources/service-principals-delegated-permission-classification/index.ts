import type { INodeProperties } from 'n8n-workflow';

export const servicePrincipalsDelegatedPermissionClassificationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Delegated Permission Classification"
					]
				}
			},
			"options": [
				{
					"name": "Service Principals List Delegated Permission Classifications",
					"value": "Service Principals List Delegated Permission Classifications",
					"action": "List delegatedPermissionClassifications collection of servicePrincipal",
					"description": "Retrieve the list of delegatedPermissionClassification currently configured for the delegated permissions exposed by an API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/delegatedPermissionClassifications"
						}
					}
				},
				{
					"name": "Service Principals Create Delegated Permission Classifications",
					"value": "Service Principals Create Delegated Permission Classifications",
					"action": "Create delegatedPermissionClassification",
					"description": "Classify a delegated permission by adding a delegatedPermissionClassification to the servicePrincipal representing the API.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/delegatedPermissionClassifications"
						}
					}
				},
				{
					"name": "Service Principals Delete Delegated Permission Classifications",
					"value": "Service Principals Delete Delegated Permission Classifications",
					"action": "Delete navigation property delegatedPermissionClassifications for servicePrincipals",
					"description": "Delete navigation property delegatedPermissionClassifications for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/delegatedPermissionClassifications/{{$parameter[\"delegatedPermissionClassification-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Get Delegated Permission Classifications",
					"value": "Service Principals Get Delegated Permission Classifications",
					"action": "Get delegatedPermissionClassifications from servicePrincipals",
					"description": "The permission classifications for delegated permissions exposed by the app that this service principal represents. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/delegatedPermissionClassifications/{{$parameter[\"delegatedPermissionClassification-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Update Delegated Permission Classifications",
					"value": "Service Principals Update Delegated Permission Classifications",
					"action": "Update the navigation property delegatedPermissionClassifications in servicePrincipals",
					"description": "Update the navigation property delegatedPermissionClassifications in servicePrincipals",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/delegatedPermissionClassifications/{{$parameter[\"delegatedPermissionClassification-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals List Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals List Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals List Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals List Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals List Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals List Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals List Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals List Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals List Delegated Permission Classifications"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals Create Delegated Permission Classifications"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals Create Delegated Permission Classifications"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals Delete Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals Delete Delegated Permission Classifications"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals Get Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals Get Delegated Permission Classifications"
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
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals Get Delegated Permission Classifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals Update Delegated Permission Classifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Delegated Permission Classification"
					],
					"operation": [
						"Service Principals Update Delegated Permission Classifications"
					]
				}
			}
		},
];
