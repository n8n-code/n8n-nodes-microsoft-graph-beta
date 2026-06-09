import type { INodeProperties } from 'n8n-workflow';

export const governanceResourcesGovernanceResourceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Resource"
					]
				}
			},
			"options": [
				{
					"name": "Governance Resources Governance Resource List Governance Resource",
					"value": "Governance Resources Governance Resource List Governance Resource",
					"action": "Get entities from governanceResources",
					"description": "Get entities from governanceResources",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources"
						}
					}
				},
				{
					"name": "Governance Resources Governance Resource Create Governance Resource",
					"value": "Governance Resources Governance Resource Create Governance Resource",
					"action": "Add new entity to governanceResources",
					"description": "Add new entity to governanceResources",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceResources"
						}
					}
				},
				{
					"name": "Governance Resources Governance Resource Delete Governance Resource",
					"value": "Governance Resources Governance Resource Delete Governance Resource",
					"action": "Delete entity from governanceResources",
					"description": "Delete entity from governanceResources",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Governance Resource Get Governance Resource",
					"value": "Governance Resources Governance Resource Get Governance Resource",
					"action": "Get entity from governanceResources by key",
					"description": "Get entity from governanceResources by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Governance Resource Update Governance Resource",
					"value": "Governance Resources Governance Resource Update Governance Resource",
					"action": "Update entity in governanceResources",
					"description": "Update entity in governanceResources",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Get Parent",
					"value": "Governance Resources Get Parent",
					"action": "Get parent from governanceResources",
					"description": "Read-only. The parent resource. for pimforazurerbac scenario, it can represent the subscription the resource belongs to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/parent"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource List Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource List Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource List Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource List Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource List Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource List Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource List Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource List Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource List Governance Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource Create Governance Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceResources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource Create Governance Resource"
					]
				}
			}
		},
		{
			"displayName": "DELETE /governanceResources/{governanceResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource Delete Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource Delete Governance Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource Get Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource Get Governance Resource"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource Get Governance Resource"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource Update Governance Resource"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Governance Resource Update Governance Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/parent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Get Parent"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Get Parent"
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
						"Governance Resources Governance Resource"
					],
					"operation": [
						"Governance Resources Get Parent"
					]
				}
			}
		},
];
