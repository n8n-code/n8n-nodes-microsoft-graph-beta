import type { INodeProperties } from 'n8n-workflow';

export const accessReviewDecisionsAccessReviewDecisionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Access Review Decisions Access Review Decision"
					]
				}
			},
			"options": [
				{
					"name": "Access Review Decisions Access Review Decision List Access Review Decision",
					"value": "Access Review Decisions Access Review Decision List Access Review Decision",
					"action": "Get entities from accessReviewDecisions",
					"description": "Get entities from accessReviewDecisions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviewDecisions"
						}
					}
				},
				{
					"name": "Access Review Decisions Access Review Decision Create Access Review Decision",
					"value": "Access Review Decisions Access Review Decision Create Access Review Decision",
					"action": "Add new entity to accessReviewDecisions",
					"description": "Add new entity to accessReviewDecisions",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviewDecisions"
						}
					}
				},
				{
					"name": "Access Review Decisions Access Review Decision Delete Access Review Decision",
					"value": "Access Review Decisions Access Review Decision Delete Access Review Decision",
					"action": "Delete entity from accessReviewDecisions",
					"description": "Delete entity from accessReviewDecisions",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accessReviewDecisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Review Decisions Access Review Decision Get Access Review Decision",
					"value": "Access Review Decisions Access Review Decision Get Access Review Decision",
					"action": "Get entity from accessReviewDecisions by key",
					"description": "Get entity from accessReviewDecisions by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviewDecisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Review Decisions Access Review Decision Update Access Review Decision",
					"value": "Access Review Decisions Access Review Decision Update Access Review Decision",
					"action": "Update entity in accessReviewDecisions",
					"description": "Update entity in accessReviewDecisions",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/accessReviewDecisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /accessReviewDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision List Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision List Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision List Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision List Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision List Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision List Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision List Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision List Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision List Access Review Decision"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviewDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision Create Access Review Decision"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviewDecisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision Create Access Review Decision"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accessReviewDecisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision Delete Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision Delete Access Review Decision"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviewDecisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision Get Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision Get Access Review Decision"
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
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision Get Access Review Decision"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviewDecisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision Update Access Review Decision"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviewDecisions/{accessReviewDecision-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Review Decisions Access Review Decision"
					],
					"operation": [
						"Access Review Decisions Access Review Decision Update Access Review Decision"
					]
				}
			}
		},
];
