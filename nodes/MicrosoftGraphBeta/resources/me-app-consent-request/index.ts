import type { INodeProperties } from 'n8n-workflow';

export const meAppConsentRequestDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					]
				}
			},
			"options": [
				{
					"name": "Me List App Consent Requests For Approval",
					"value": "Me List App Consent Requests For Approval",
					"action": "Get appConsentRequestsForApproval from me",
					"description": "Get appConsentRequestsForApproval from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/appConsentRequestsForApproval"
						}
					}
				},
				{
					"name": "Me Create App Consent Requests For Approval",
					"value": "Me Create App Consent Requests For Approval",
					"action": "Create new navigation property to appConsentRequestsForApproval for me",
					"description": "Create new navigation property to appConsentRequestsForApproval for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/appConsentRequestsForApproval"
						}
					}
				},
				{
					"name": "Me Delete App Consent Requests For Approval",
					"value": "Me Delete App Consent Requests For Approval",
					"action": "Delete navigation property appConsentRequestsForApproval for me",
					"description": "Delete navigation property appConsentRequestsForApproval for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get App Consent Requests For Approval",
					"value": "Me Get App Consent Requests For Approval",
					"action": "Get appConsentRequestsForApproval from me",
					"description": "Get appConsentRequestsForApproval from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update App Consent Requests For Approval",
					"value": "Me Update App Consent Requests For Approval",
					"action": "Update the navigation property appConsentRequestsForApproval in me",
					"description": "Update the navigation property appConsentRequestsForApproval in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval List User Consent Requests",
					"value": "Me App Consent Requests For Approval List User Consent Requests",
					"action": "List userConsentRequests",
					"description": "Retrieve a collection of userConsentRequest objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval Create User Consent Requests",
					"value": "Me App Consent Requests For Approval Create User Consent Requests",
					"action": "Create new navigation property to userConsentRequests for me",
					"description": "Create new navigation property to userConsentRequests for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval Delete User Consent Requests",
					"value": "Me App Consent Requests For Approval Delete User Consent Requests",
					"action": "Delete navigation property userConsentRequests for me",
					"description": "Delete navigation property userConsentRequests for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval Get User Consent Requests",
					"value": "Me App Consent Requests For Approval Get User Consent Requests",
					"action": "Get userConsentRequests from me",
					"description": "A list of pending user consent requests. Supports $filter (eq).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval Update User Consent Requests",
					"value": "Me App Consent Requests For Approval Update User Consent Requests",
					"action": "Update the navigation property userConsentRequests in me",
					"description": "Update the navigation property userConsentRequests in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval User Consent Requests Delete Approval",
					"value": "Me App Consent Requests For Approval User Consent Requests Delete Approval",
					"action": "Delete navigation property approval for me",
					"description": "Delete navigation property approval for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval User Consent Requests Get Approval",
					"value": "Me App Consent Requests For Approval User Consent Requests Get Approval",
					"action": "Get approval from me",
					"description": "Approval decisions associated with a request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval User Consent Requests Update Approval",
					"value": "Me App Consent Requests For Approval User Consent Requests Update Approval",
					"action": "Update the navigation property approval in me",
					"description": "Update the navigation property approval in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval User Consent Requests Approval List Steps",
					"value": "Me App Consent Requests For Approval User Consent Requests Approval List Steps",
					"action": "List approvalSteps",
					"description": "In Azure AD entitlement management, lists the approvalStep objects associated with an approval object.  This call can be made by an approver, providing the identifier of the access package assignment request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval User Consent Requests Approval Create Steps",
					"value": "Me App Consent Requests For Approval User Consent Requests Approval Create Steps",
					"action": "Create new navigation property to steps for me",
					"description": "Create new navigation property to steps for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval User Consent Requests Approval Delete Steps",
					"value": "Me App Consent Requests For Approval User Consent Requests Approval Delete Steps",
					"action": "Delete navigation property steps for me",
					"description": "Delete navigation property steps for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval User Consent Requests Approval Get Steps",
					"value": "Me App Consent Requests For Approval User Consent Requests Approval Get Steps",
					"action": "Get steps from me",
					"description": "Get steps from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval User Consent Requests Approval Update Steps",
					"value": "Me App Consent Requests For Approval User Consent Requests Approval Update Steps",
					"action": "Update the navigation property steps in me",
					"description": "Update the navigation property steps in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/appConsentRequestsForApproval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me List App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me List App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me List App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me List App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me List App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me List App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me List App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me List App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me List App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "POST /me/appConsentRequestsForApproval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me Create App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "POST /me/appConsentRequestsForApproval<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me Create App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me Delete App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me Delete App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "GET /me/appConsentRequestsForApproval/{appConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me Get App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me Get App Consent Requests For Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me Get App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me Update App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me Update App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval List User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval List User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval List User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval List User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval List User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval List User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval List User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval List User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval List User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval Create User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval Create User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval Delete User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval Delete User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval Get User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval Get User Consent Requests"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval Get User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval Update User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval Update User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Delete Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Delete Approval"
					]
				}
			}
		},
		{
			"displayName": "GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Get Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Get Approval"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Get Approval"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Update Approval"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Update Approval"
					]
				}
			}
		},
		{
			"displayName": "GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval List Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval Create Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval Create Steps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval Delete Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval Delete Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval Get Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval Get Steps"
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
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval Get Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval Update Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me App Consent Request"
					],
					"operation": [
						"Me App Consent Requests For Approval User Consent Requests Approval Update Steps"
					]
				}
			}
		},
];
