import type { INodeProperties } from 'n8n-workflow';

export const accessReviewsAccessReviewDecisionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					]
				}
			},
			"options": [
				{
					"name": "Access Reviews List Decisions",
					"value": "Access Reviews List Decisions",
					"action": "List accessReview decisions (deprecated)",
					"description": "In the Azure AD access reviews feature, retrieve the decisions of an accessReview object. Note that a recurring access review will not have a **decisions** relationship.  Instead, the caller must navigate the **instance** relationship to find an accessReview object for a current or past instance of the access review.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Access Reviews Create Decisions",
					"value": "Access Reviews Create Decisions",
					"action": "Create new navigation property to decisions for accessReviews",
					"description": "Create new navigation property to decisions for accessReviews",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Access Reviews Delete Decisions",
					"value": "Access Reviews Delete Decisions",
					"action": "Delete navigation property decisions for accessReviews",
					"description": "Delete navigation property decisions for accessReviews",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/decisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Get Decisions",
					"value": "Access Reviews Get Decisions",
					"action": "Get decisions from accessReviews",
					"description": "The collection of decisions for this access review.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/decisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Update Decisions",
					"value": "Access Reviews Update Decisions",
					"action": "Update the navigation property decisions in accessReviews",
					"description": "Update the navigation property decisions in accessReviews",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/decisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews List My Decisions",
					"value": "Access Reviews List My Decisions",
					"action": "List my accessReview decisions (deprecated)",
					"description": "In the Azure AD access reviews feature, retrieve the decisions of an accessReview object for the calling user as reviewer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/myDecisions"
						}
					}
				},
				{
					"name": "Access Reviews Create My Decisions",
					"value": "Access Reviews Create My Decisions",
					"action": "Create new navigation property to myDecisions for accessReviews",
					"description": "Create new navigation property to myDecisions for accessReviews",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/myDecisions"
						}
					}
				},
				{
					"name": "Access Reviews Delete My Decisions",
					"value": "Access Reviews Delete My Decisions",
					"action": "Delete navigation property myDecisions for accessReviews",
					"description": "Delete navigation property myDecisions for accessReviews",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/myDecisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Get My Decisions",
					"value": "Access Reviews Get My Decisions",
					"action": "Get myDecisions from accessReviews",
					"description": "The collection of decisions for the caller, if the caller is a reviewer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/myDecisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Update My Decisions",
					"value": "Access Reviews Update My Decisions",
					"action": "Update the navigation property myDecisions in accessReviews",
					"description": "Update the navigation property myDecisions in accessReviews",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/myDecisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Delete Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Get Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Get Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/myDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews List My Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/myDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Create My Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/myDecisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Create My Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Delete My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Delete My Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Get My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Get My Decisions"
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
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Get My Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Update My Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Decision"
					],
					"operation": [
						"Access Reviews Update My Decisions"
					]
				}
			}
		},
];
