import type { INodeProperties } from 'n8n-workflow';

export const usersInferenceClassificationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					]
				}
			},
			"options": [
				{
					"name": "Users Get Inference Classification",
					"value": "Users Get Inference Classification",
					"action": "Get inferenceClassification from users",
					"description": "Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/inferenceClassification"
						}
					}
				},
				{
					"name": "Users Update Inference Classification",
					"value": "Users Update Inference Classification",
					"action": "Update the navigation property inferenceClassification in users",
					"description": "Update the navigation property inferenceClassification in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/inferenceClassification"
						}
					}
				},
				{
					"name": "Users Inference Classification List Overrides",
					"value": "Users Inference Classification List Overrides",
					"action": "List overrides",
					"description": "Get the Focused Inbox overrides that a user has set up to always classify messages from certain senders in specific ways. Each override corresponds to an SMTP address of a sender. Initially, a user does not have any overrides.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/inferenceClassification/overrides"
						}
					}
				},
				{
					"name": "Users Inference Classification Create Overrides",
					"value": "Users Inference Classification Create Overrides",
					"action": "Create inferenceClassificationOverride",
					"description": "Create a focused Inbox override for a sender identified by an SMTP address. Future messages from that SMTP address will be consistently classified\nas specified in the override.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/inferenceClassification/overrides"
						}
					}
				},
				{
					"name": "Users Inference Classification Delete Overrides",
					"value": "Users Inference Classification Delete Overrides",
					"action": "Delete navigation property overrides for users",
					"description": "Delete navigation property overrides for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/inferenceClassification/overrides/{{$parameter[\"inferenceClassificationOverride-id\"]}}"
						}
					}
				},
				{
					"name": "Users Inference Classification Get Overrides",
					"value": "Users Inference Classification Get Overrides",
					"action": "Get overrides from users",
					"description": "A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/inferenceClassification/overrides/{{$parameter[\"inferenceClassificationOverride-id\"]}}"
						}
					}
				},
				{
					"name": "Users Inference Classification Update Overrides",
					"value": "Users Inference Classification Update Overrides",
					"action": "Update the navigation property overrides in users",
					"description": "Update the navigation property overrides in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/inferenceClassification/overrides/{{$parameter[\"inferenceClassificationOverride-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/inferenceClassification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					],
					"operation": [
						"Users Get Inference Classification"
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
						"Users Inference Classification"
					],
					"operation": [
						"Users Get Inference Classification"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/inferenceClassification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					],
					"operation": [
						"Users Update Inference Classification"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/inferenceClassification<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					],
					"operation": [
						"Users Update Inference Classification"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/inferenceClassification/overrides",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification List Overrides"
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
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification List Overrides"
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
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification List Overrides"
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
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification List Overrides"
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
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification List Overrides"
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
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification List Overrides"
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
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification List Overrides"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/inferenceClassification/overrides",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification Create Overrides"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/inferenceClassification/overrides<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification Create Overrides"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification Delete Overrides"
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
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification Delete Overrides"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification Get Overrides"
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
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification Get Overrides"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification Update Overrides"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Inference Classification"
					],
					"operation": [
						"Users Inference Classification Update Overrides"
					]
				}
			}
		},
];
