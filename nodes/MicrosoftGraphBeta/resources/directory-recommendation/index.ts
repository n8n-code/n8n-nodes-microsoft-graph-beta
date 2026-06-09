import type { INodeProperties } from 'n8n-workflow';

export const directoryRecommendationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Recommendation"
					]
				}
			},
			"options": [
				{
					"name": "Directory List Recommendations",
					"value": "Directory List Recommendations",
					"action": "List recommendations",
					"description": "Get a list of the recommendation objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/recommendations"
						}
					}
				},
				{
					"name": "Directory Create Recommendations",
					"value": "Directory Create Recommendations",
					"action": "Create new navigation property to recommendations for directory",
					"description": "Create new navigation property to recommendations for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/recommendations"
						}
					}
				},
				{
					"name": "Directory Delete Recommendations",
					"value": "Directory Delete Recommendations",
					"action": "Delete navigation property recommendations for directory",
					"description": "Delete navigation property recommendations for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/recommendations/{{$parameter[\"recommendation-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Get Recommendations",
					"value": "Directory Get Recommendations",
					"action": "Get recommendations from directory",
					"description": "List of recommended improvements to improve tenant posture.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/recommendations/{{$parameter[\"recommendation-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Update Recommendations",
					"value": "Directory Update Recommendations",
					"action": "Update the navigation property recommendations in directory",
					"description": "Update the navigation property recommendations in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/recommendations/{{$parameter[\"recommendation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/recommendations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Recommendation"
					],
					"operation": [
						"Directory List Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory List Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory List Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory List Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory List Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory List Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory List Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory List Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory List Recommendations"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/recommendations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Recommendation"
					],
					"operation": [
						"Directory Create Recommendations"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/recommendations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Recommendation"
					],
					"operation": [
						"Directory Create Recommendations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/recommendations/{recommendation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Recommendation"
					],
					"operation": [
						"Directory Delete Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory Delete Recommendations"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/recommendations/{recommendation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Recommendation"
					],
					"operation": [
						"Directory Get Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory Get Recommendations"
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
						"Directory Recommendation"
					],
					"operation": [
						"Directory Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/recommendations/{recommendation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Recommendation"
					],
					"operation": [
						"Directory Update Recommendations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/recommendations/{recommendation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Recommendation"
					],
					"operation": [
						"Directory Update Recommendations"
					]
				}
			}
		},
];
