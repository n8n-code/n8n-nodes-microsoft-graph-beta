import type { INodeProperties } from 'n8n-workflow';

export const accessReviewsAccessReviewReviewerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Reviewer"
					]
				}
			},
			"options": [
				{
					"name": "Access Reviews List Reviewers",
					"value": "Access Reviews List Reviewers",
					"action": "List accessReview reviewers (deprecated)",
					"description": "In the Azure AD access reviews feature, retrieve the reviewers of an accessReview object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/reviewers"
						}
					}
				},
				{
					"name": "Access Reviews Create Reviewers",
					"value": "Access Reviews Create Reviewers",
					"action": "Add accessReview reviewer (deprecated)",
					"description": "In the Azure AD access reviews feature, update an existing accessReview object to add another user as a reviewer.  This operation is only permitted for an access review that is not yet completed, and only for an access review where the reviewers are explicitly specified. This operation is not permitted for an access review in which users review their own access, and not intended for an access review in which the group owners are assigned as the reviewers. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/reviewers"
						}
					}
				},
				{
					"name": "Access Reviews Delete Reviewers",
					"value": "Access Reviews Delete Reviewers",
					"action": "Delete navigation property reviewers for accessReviews",
					"description": "Delete navigation property reviewers for accessReviews",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/reviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Get Reviewers",
					"value": "Access Reviews Get Reviewers",
					"action": "Get reviewers from accessReviews",
					"description": "The collection of reviewers for an access review, if access review reviewerType is of type delegated.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/reviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Update Reviewers",
					"value": "Access Reviews Update Reviewers",
					"action": "Update the navigation property reviewers in accessReviews",
					"description": "Update the navigation property reviewers in accessReviews",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/reviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/reviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews List Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews List Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews List Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews List Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews List Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews List Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews List Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews List Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews List Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/reviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews Create Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/reviewers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews Create Reviewers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews Delete Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews Delete Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews Get Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews Get Reviewers"
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
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews Get Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews Update Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review Reviewer"
					],
					"operation": [
						"Access Reviews Update Reviewers"
					]
				}
			}
		},
];
