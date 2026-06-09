import type { INodeProperties } from 'n8n-workflow';

export const meInferenceClassificationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					]
				}
			},
			"options": [
				{
					"name": "Me Get Inference Classification",
					"value": "Me Get Inference Classification",
					"action": "Get inferenceClassification from me",
					"description": "Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/inferenceClassification"
						}
					}
				},
				{
					"name": "Me Update Inference Classification",
					"value": "Me Update Inference Classification",
					"action": "Update the navigation property inferenceClassification in me",
					"description": "Update the navigation property inferenceClassification in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/inferenceClassification"
						}
					}
				},
				{
					"name": "Me Inference Classification List Overrides",
					"value": "Me Inference Classification List Overrides",
					"action": "List overrides",
					"description": "Get the Focused Inbox overrides that a user has set up to always classify messages from certain senders in specific ways. Each override corresponds to an SMTP address of a sender. Initially, a user does not have any overrides.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/inferenceClassification/overrides"
						}
					}
				},
				{
					"name": "Me Inference Classification Create Overrides",
					"value": "Me Inference Classification Create Overrides",
					"action": "Create inferenceClassificationOverride",
					"description": "Create a focused Inbox override for a sender identified by an SMTP address. Future messages from that SMTP address will be consistently classified\nas specified in the override.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/inferenceClassification/overrides"
						}
					}
				},
				{
					"name": "Me Inference Classification Delete Overrides",
					"value": "Me Inference Classification Delete Overrides",
					"action": "Delete navigation property overrides for me",
					"description": "Delete navigation property overrides for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/inferenceClassification/overrides/{{$parameter[\"inferenceClassificationOverride-id\"]}}"
						}
					}
				},
				{
					"name": "Me Inference Classification Get Overrides",
					"value": "Me Inference Classification Get Overrides",
					"action": "Get overrides from me",
					"description": "A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/inferenceClassification/overrides/{{$parameter[\"inferenceClassificationOverride-id\"]}}"
						}
					}
				},
				{
					"name": "Me Inference Classification Update Overrides",
					"value": "Me Inference Classification Update Overrides",
					"action": "Update the navigation property overrides in me",
					"description": "Update the navigation property overrides in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/inferenceClassification/overrides/{{$parameter[\"inferenceClassificationOverride-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/inferenceClassification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					],
					"operation": [
						"Me Get Inference Classification"
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
						"Me Inference Classification"
					],
					"operation": [
						"Me Get Inference Classification"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/inferenceClassification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					],
					"operation": [
						"Me Update Inference Classification"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/inferenceClassification<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					],
					"operation": [
						"Me Update Inference Classification"
					]
				}
			}
		},
		{
			"displayName": "GET /me/inferenceClassification/overrides",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification List Overrides"
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
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification List Overrides"
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
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification List Overrides"
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
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification List Overrides"
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
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification List Overrides"
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
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification List Overrides"
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
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification List Overrides"
					]
				}
			}
		},
		{
			"displayName": "POST /me/inferenceClassification/overrides",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification Create Overrides"
					]
				}
			}
		},
		{
			"displayName": "POST /me/inferenceClassification/overrides<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification Create Overrides"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification Delete Overrides"
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
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification Delete Overrides"
					]
				}
			}
		},
		{
			"displayName": "GET /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification Get Overrides"
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
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification Get Overrides"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification Update Overrides"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/inferenceClassification/overrides/{inferenceClassificationOverride-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Inference Classification"
					],
					"operation": [
						"Me Inference Classification Update Overrides"
					]
				}
			}
		},
];
