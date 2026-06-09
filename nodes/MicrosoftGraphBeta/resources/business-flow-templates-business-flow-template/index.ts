import type { INodeProperties } from 'n8n-workflow';

export const businessFlowTemplatesBusinessFlowTemplateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Business Flow Templates Business Flow Template"
					]
				}
			},
			"options": [
				{
					"name": "Business Flow Templates Business Flow Template List Business Flow Template",
					"value": "Business Flow Templates Business Flow Template List Business Flow Template",
					"action": "List businessFlowTemplates (deprecated)",
					"description": "In the Azure AD access reviews feature, list all the businessFlowTemplate objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/businessFlowTemplates"
						}
					}
				},
				{
					"name": "Business Flow Templates Business Flow Template Create Business Flow Template",
					"value": "Business Flow Templates Business Flow Template Create Business Flow Template",
					"action": "Add new entity to businessFlowTemplates",
					"description": "Add new entity to businessFlowTemplates",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/businessFlowTemplates"
						}
					}
				},
				{
					"name": "Business Flow Templates Business Flow Template Delete Business Flow Template",
					"value": "Business Flow Templates Business Flow Template Delete Business Flow Template",
					"action": "Delete entity from businessFlowTemplates",
					"description": "Delete entity from businessFlowTemplates",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/businessFlowTemplates/{{$parameter[\"businessFlowTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Business Flow Templates Business Flow Template Get Business Flow Template",
					"value": "Business Flow Templates Business Flow Template Get Business Flow Template",
					"action": "Get entity from businessFlowTemplates by key",
					"description": "Get entity from businessFlowTemplates by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/businessFlowTemplates/{{$parameter[\"businessFlowTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Business Flow Templates Business Flow Template Update Business Flow Template",
					"value": "Business Flow Templates Business Flow Template Update Business Flow Template",
					"action": "Update entity in businessFlowTemplates",
					"description": "Update entity in businessFlowTemplates",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/businessFlowTemplates/{{$parameter[\"businessFlowTemplate-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /businessFlowTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template List Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template List Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template List Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template List Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template List Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template List Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template List Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template List Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template List Business Flow Template"
					]
				}
			}
		},
		{
			"displayName": "POST /businessFlowTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template Create Business Flow Template"
					]
				}
			}
		},
		{
			"displayName": "POST /businessFlowTemplates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template Create Business Flow Template"
					]
				}
			}
		},
		{
			"displayName": "DELETE /businessFlowTemplates/{businessFlowTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template Delete Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template Delete Business Flow Template"
					]
				}
			}
		},
		{
			"displayName": "GET /businessFlowTemplates/{businessFlowTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template Get Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template Get Business Flow Template"
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
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template Get Business Flow Template"
					]
				}
			}
		},
		{
			"displayName": "PATCH /businessFlowTemplates/{businessFlowTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template Update Business Flow Template"
					]
				}
			}
		},
		{
			"displayName": "PATCH /businessFlowTemplates/{businessFlowTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Flow Templates Business Flow Template"
					],
					"operation": [
						"Business Flow Templates Business Flow Template Update Business Flow Template"
					]
				}
			}
		},
];
