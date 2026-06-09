import type { INodeProperties } from 'n8n-workflow';

export const servicePrincipalsLicenseDetailsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals License Details"
					]
				}
			},
			"options": [
				{
					"name": "Service Principals List License Details",
					"value": "Service Principals List License Details",
					"action": "Get licenseDetails from servicePrincipals",
					"description": "Get licenseDetails from servicePrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/licenseDetails"
						}
					}
				},
				{
					"name": "Service Principals Create License Details",
					"value": "Service Principals Create License Details",
					"action": "Create new navigation property to licenseDetails for servicePrincipals",
					"description": "Create new navigation property to licenseDetails for servicePrincipals",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/licenseDetails"
						}
					}
				},
				{
					"name": "Service Principals Delete License Details",
					"value": "Service Principals Delete License Details",
					"action": "Delete navigation property licenseDetails for servicePrincipals",
					"description": "Delete navigation property licenseDetails for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/licenseDetails/{{$parameter[\"licenseDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Get License Details",
					"value": "Service Principals Get License Details",
					"action": "Get licenseDetails from servicePrincipals",
					"description": "Get licenseDetails from servicePrincipals",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/licenseDetails/{{$parameter[\"licenseDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Update License Details",
					"value": "Service Principals Update License Details",
					"action": "Update the navigation property licenseDetails in servicePrincipals",
					"description": "Update the navigation property licenseDetails in servicePrincipals",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/licenseDetails/{{$parameter[\"licenseDetails-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/licenseDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals List License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals List License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals List License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals List License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals List License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals List License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals List License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals List License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals List License Details"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/licenseDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals Create License Details"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/licenseDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals Create License Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals Delete License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals Delete License Details"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals Get License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals Get License Details"
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
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals Get License Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals Update License Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals License Details"
					],
					"operation": [
						"Service Principals Update License Details"
					]
				}
			}
		},
];
