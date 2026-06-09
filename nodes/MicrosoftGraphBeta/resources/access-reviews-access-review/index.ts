import type { INodeProperties } from 'n8n-workflow';

export const accessReviewsAccessReviewDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					]
				}
			},
			"options": [
				{
					"name": "Access Reviews Access Review List Access Review",
					"value": "Access Reviews Access Review List Access Review",
					"action": "List accessReviews (deprecated)",
					"description": "Retrieve the accessReview objects for a particular businessFlowTemplate. A list of zero or more **accessReview** objects are returned, for each one-time and recurring access review that was created with that business flow template.  Note that business flow template IDs are case sensitive. If many access reviews match the filter, to improve efficiency and avoid timeouts, retrieve the result set in pages, by including both the `$top` query parameter with a page size, for example 100, and the `$skip=0` query parameter in the request. These parameters can be included even when you do not anticipate that the request will span multiple pages. When a result set spans multiple pages, Microsoft Graph returns that page with an `@odata.nextLink` property in the response that contains a URL to the next page of results. If that property is present, continue making additional requests with the `@odata.nextLink` URL in each response, until all the results are returned, as described in paging Microsoft Graph data in your app. The **accessReview** objects returned by this API will not include nested structure properties such as **settings**, or relationships.  To retrieve an access review settings or relationships, use the get accessReview API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Create Access Review",
					"value": "Access Reviews Access Review Create Access Review",
					"action": "Create accessReview (deprecated)",
					"description": "In the Azure AD access reviews feature, create a new accessReview object. Before making this request, the caller must have previously retrieved the list of business flow templates, to have the value of **businessFlowTemplateId** to include in the request. After making this request, the caller should create a programControl, to link the access review to a program.  ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Delete Access Review",
					"value": "Access Reviews Access Review Delete Access Review",
					"action": "Delete accessReview (deprecated)",
					"description": "In the Azure AD access reviews feature, delete an accessReview object.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Get Access Review",
					"value": "Access Reviews Access Review Get Access Review",
					"action": "Get accessReview (deprecated)",
					"description": "In the Azure AD access reviews feature, retrieve an accessReview object.   To retrieve the reviewers of the access review, use the list accessReview reviewers API. To retrieve the decisions of the access review, use the list accessReview decisions API, or the list my accessReview decisions API. If this is a recurring access review, no decisions will be associated with the recurring access review series. Instead, use the `instances` relationship of that series to retrieve an accessReview collection of the past, current, and future instances of the access review. Each past and current instance will have decisions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Access Review Update Access Review",
					"value": "Access Reviews Access Review Update Access Review",
					"action": "Update accessReview (deprecated)",
					"description": "In the Azure AD access reviews feature, update an existing accessReview object to change one or more of its properties. This API is not intended to change the reviewers or decisions of a review.  To change the reviewers, use the addReviewer or removeReviewer APIs.  To stop an already-started one-time review, or an already-started instance of a recurring review, early, use the stop API. To apply the decisions to the target group or app access rights, use the apply API. ",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews List Instances",
					"value": "Access Reviews List Instances",
					"action": "Get instances from accessReviews",
					"description": "The collection of access reviews instances past, present and future, if this object is a recurring access review.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances"
						}
					}
				},
				{
					"name": "Access Reviews Create Instances",
					"value": "Access Reviews Create Instances",
					"action": "Create new navigation property to instances for accessReviews",
					"description": "Create new navigation property to instances for accessReviews",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances"
						}
					}
				},
				{
					"name": "Access Reviews Delete Instances",
					"value": "Access Reviews Delete Instances",
					"action": "Delete navigation property instances for accessReviews",
					"description": "Delete navigation property instances for accessReviews",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Get Instances",
					"value": "Access Reviews Get Instances",
					"action": "Get instances from accessReviews",
					"description": "The collection of access reviews instances past, present and future, if this object is a recurring access review.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Update Instances",
					"value": "Access Reviews Update Instances",
					"action": "Update the navigation property instances in accessReviews",
					"description": "Update the navigation property instances in accessReviews",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Instances List Decisions",
					"value": "Access Reviews Instances List Decisions",
					"action": "List accessReview decisions (deprecated)",
					"description": "In the Azure AD access reviews feature, retrieve the decisions of an accessReview object. Note that a recurring access review will not have a **decisions** relationship.  Instead, the caller must navigate the **instance** relationship to find an accessReview object for a current or past instance of the access review.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/decisions"
						}
					}
				},
				{
					"name": "Access Reviews Instances Create Decisions",
					"value": "Access Reviews Instances Create Decisions",
					"action": "Create new navigation property to decisions for accessReviews",
					"description": "Create new navigation property to decisions for accessReviews",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/decisions"
						}
					}
				},
				{
					"name": "Access Reviews Instances Delete Decisions",
					"value": "Access Reviews Instances Delete Decisions",
					"action": "Delete navigation property decisions for accessReviews",
					"description": "Delete navigation property decisions for accessReviews",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/decisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Instances Get Decisions",
					"value": "Access Reviews Instances Get Decisions",
					"action": "Get decisions from accessReviews",
					"description": "The collection of decisions for this access review.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/decisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Instances Update Decisions",
					"value": "Access Reviews Instances Update Decisions",
					"action": "Update the navigation property decisions in accessReviews",
					"description": "Update the navigation property decisions in accessReviews",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/decisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Instances List My Decisions",
					"value": "Access Reviews Instances List My Decisions",
					"action": "List my accessReview decisions (deprecated)",
					"description": "In the Azure AD access reviews feature, retrieve the decisions of an accessReview object for the calling user as reviewer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/myDecisions"
						}
					}
				},
				{
					"name": "Access Reviews Instances Create My Decisions",
					"value": "Access Reviews Instances Create My Decisions",
					"action": "Create new navigation property to myDecisions for accessReviews",
					"description": "Create new navigation property to myDecisions for accessReviews",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/myDecisions"
						}
					}
				},
				{
					"name": "Access Reviews Instances Delete My Decisions",
					"value": "Access Reviews Instances Delete My Decisions",
					"action": "Delete navigation property myDecisions for accessReviews",
					"description": "Delete navigation property myDecisions for accessReviews",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/myDecisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Instances Get My Decisions",
					"value": "Access Reviews Instances Get My Decisions",
					"action": "Get myDecisions from accessReviews",
					"description": "The collection of decisions for the caller, if the caller is a reviewer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/myDecisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Instances Update My Decisions",
					"value": "Access Reviews Instances Update My Decisions",
					"action": "Update the navigation property myDecisions in accessReviews",
					"description": "Update the navigation property myDecisions in accessReviews",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/myDecisions/{{$parameter[\"accessReviewDecision-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Instances List Reviewers",
					"value": "Access Reviews Instances List Reviewers",
					"action": "List accessReview reviewers (deprecated)",
					"description": "In the Azure AD access reviews feature, retrieve the reviewers of an accessReview object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/reviewers"
						}
					}
				},
				{
					"name": "Access Reviews Instances Create Reviewers",
					"value": "Access Reviews Instances Create Reviewers",
					"action": "Add accessReview reviewer (deprecated)",
					"description": "In the Azure AD access reviews feature, update an existing accessReview object to add another user as a reviewer.  This operation is only permitted for an access review that is not yet completed, and only for an access review where the reviewers are explicitly specified. This operation is not permitted for an access review in which users review their own access, and not intended for an access review in which the group owners are assigned as the reviewers. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/reviewers"
						}
					}
				},
				{
					"name": "Access Reviews Instances Delete Reviewers",
					"value": "Access Reviews Instances Delete Reviewers",
					"action": "Delete navigation property reviewers for accessReviews",
					"description": "Delete navigation property reviewers for accessReviews",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/reviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Instances Get Reviewers",
					"value": "Access Reviews Instances Get Reviewers",
					"action": "Get reviewers from accessReviews",
					"description": "The collection of reviewers for an access review, if access review reviewerType is of type delegated.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/reviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Access Reviews Instances Update Reviewers",
					"value": "Access Reviews Instances Update Reviewers",
					"action": "Update the navigation property reviewers in accessReviews",
					"description": "Update the navigation property reviewers in accessReviews",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/accessReviews/{{$parameter[\"accessReview-id\"]}}/instances/{{$parameter[\"accessReview-id1\"]}}/reviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /accessReviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review List Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review List Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review List Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review List Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review List Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review List Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review List Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review List Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review List Access Review"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review Create Access Review"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review Create Access Review"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accessReviews/{accessReview-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review Delete Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review Delete Access Review"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review Get Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review Get Access Review"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review Get Access Review"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review Update Access Review"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Access Review Update Access Review"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews List Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews List Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews List Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews List Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews List Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews List Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews List Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews List Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews List Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Create Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Create Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Delete Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Delete Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Get Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Get Instances"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Get Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Update Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Update Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Delete Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Get Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Get Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List My Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Create My Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Create My Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Delete My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Delete My Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Get My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Get My Decisions"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Get My Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Update My Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Update My Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances List Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Create Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Create Reviewers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Delete Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Delete Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Get Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Get Reviewers"
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
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Get Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Update Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Access Reviews Access Review"
					],
					"operation": [
						"Access Reviews Instances Update Reviewers"
					]
				}
			}
		},
];
