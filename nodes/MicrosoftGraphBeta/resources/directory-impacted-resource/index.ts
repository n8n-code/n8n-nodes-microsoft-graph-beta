import type { INodeProperties } from 'n8n-workflow';

export const directoryImpactedResourceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Impacted Resource"
					]
				}
			},
			"options": [
				{
					"name": "Directory List Impacted Resources",
					"value": "Directory List Impacted Resources",
					"action": "Get impactedResources from directory",
					"description": "Get impactedResources from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/impactedResources"
						}
					}
				},
				{
					"name": "Directory Create Impacted Resources",
					"value": "Directory Create Impacted Resources",
					"action": "Create new navigation property to impactedResources for directory",
					"description": "Create new navigation property to impactedResources for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/impactedResources"
						}
					}
				},
				{
					"name": "Directory Delete Impacted Resources",
					"value": "Directory Delete Impacted Resources",
					"action": "Delete navigation property impactedResources for directory",
					"description": "Delete navigation property impactedResources for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/impactedResources/{{$parameter[\"impactedResource-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Get Impacted Resources",
					"value": "Directory Get Impacted Resources",
					"action": "Get impactedResources from directory",
					"description": "Get impactedResources from directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/impactedResources/{{$parameter[\"impactedResource-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Update Impacted Resources",
					"value": "Directory Update Impacted Resources",
					"action": "Update the navigation property impactedResources in directory",
					"description": "Update the navigation property impactedResources in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/impactedResources/{{$parameter[\"impactedResource-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/impactedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory List Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory List Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory List Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory List Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory List Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory List Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory List Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory List Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory List Impacted Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/impactedResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory Create Impacted Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/impactedResources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory Create Impacted Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/impactedResources/{impactedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory Delete Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory Delete Impacted Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/impactedResources/{impactedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory Get Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory Get Impacted Resources"
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
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory Get Impacted Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/impactedResources/{impactedResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory Update Impacted Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/impactedResources/{impactedResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Impacted Resource"
					],
					"operation": [
						"Directory Update Impacted Resources"
					]
				}
			}
		},
];
