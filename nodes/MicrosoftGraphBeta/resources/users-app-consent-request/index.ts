import type { INodeProperties } from 'n8n-workflow';

export const usersAppConsentRequestDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					]
				}
			},
			"options": [
				{
					"name": "Users List App Consent Requests For Approval",
					"value": "Users List App Consent Requests For Approval",
					"action": "Get appConsentRequestsForApproval from users",
					"description": "Get appConsentRequestsForApproval from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval"
						}
					}
				},
				{
					"name": "Users Create App Consent Requests For Approval",
					"value": "Users Create App Consent Requests For Approval",
					"action": "Create new navigation property to appConsentRequestsForApproval for users",
					"description": "Create new navigation property to appConsentRequestsForApproval for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval"
						}
					}
				},
				{
					"name": "Users Delete App Consent Requests For Approval",
					"value": "Users Delete App Consent Requests For Approval",
					"action": "Delete navigation property appConsentRequestsForApproval for users",
					"description": "Delete navigation property appConsentRequestsForApproval for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get App Consent Requests For Approval",
					"value": "Users Get App Consent Requests For Approval",
					"action": "Get appConsentRequestsForApproval from users",
					"description": "Get appConsentRequestsForApproval from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update App Consent Requests For Approval",
					"value": "Users Update App Consent Requests For Approval",
					"action": "Update the navigation property appConsentRequestsForApproval in users",
					"description": "Update the navigation property appConsentRequestsForApproval in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval List User Consent Requests",
					"value": "Users App Consent Requests For Approval List User Consent Requests",
					"action": "List userConsentRequests",
					"description": "Retrieve a collection of userConsentRequest objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval Create User Consent Requests",
					"value": "Users App Consent Requests For Approval Create User Consent Requests",
					"action": "Create new navigation property to userConsentRequests for users",
					"description": "Create new navigation property to userConsentRequests for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval Delete User Consent Requests",
					"value": "Users App Consent Requests For Approval Delete User Consent Requests",
					"action": "Delete navigation property userConsentRequests for users",
					"description": "Delete navigation property userConsentRequests for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval Get User Consent Requests",
					"value": "Users App Consent Requests For Approval Get User Consent Requests",
					"action": "Get userConsentRequests from users",
					"description": "A list of pending user consent requests. Supports $filter (eq).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval Update User Consent Requests",
					"value": "Users App Consent Requests For Approval Update User Consent Requests",
					"action": "Update the navigation property userConsentRequests in users",
					"description": "Update the navigation property userConsentRequests in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval User Consent Requests Delete Approval",
					"value": "Users App Consent Requests For Approval User Consent Requests Delete Approval",
					"action": "Delete navigation property approval for users",
					"description": "Delete navigation property approval for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval User Consent Requests Get Approval",
					"value": "Users App Consent Requests For Approval User Consent Requests Get Approval",
					"action": "Get approval from users",
					"description": "Approval decisions associated with a request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval User Consent Requests Update Approval",
					"value": "Users App Consent Requests For Approval User Consent Requests Update Approval",
					"action": "Update the navigation property approval in users",
					"description": "Update the navigation property approval in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval User Consent Requests Approval List Steps",
					"value": "Users App Consent Requests For Approval User Consent Requests Approval List Steps",
					"action": "List approvalSteps",
					"description": "In Azure AD entitlement management, lists the approvalStep objects associated with an approval object.  This call can be made by an approver, providing the identifier of the access package assignment request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval User Consent Requests Approval Create Steps",
					"value": "Users App Consent Requests For Approval User Consent Requests Approval Create Steps",
					"action": "Create new navigation property to steps for users",
					"description": "Create new navigation property to steps for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval User Consent Requests Approval Delete Steps",
					"value": "Users App Consent Requests For Approval User Consent Requests Approval Delete Steps",
					"action": "Delete navigation property steps for users",
					"description": "Delete navigation property steps for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval User Consent Requests Approval Get Steps",
					"value": "Users App Consent Requests For Approval User Consent Requests Approval Get Steps",
					"action": "Get steps from users",
					"description": "Get steps from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Users App Consent Requests For Approval User Consent Requests Approval Update Steps",
					"value": "Users App Consent Requests For Approval User Consent Requests Approval Update Steps",
					"action": "Update the navigation property steps in users",
					"description": "Update the navigation property steps in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/appConsentRequestsForApproval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users List App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users List App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users List App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users List App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users List App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users List App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users List App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users List App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users List App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/appConsentRequestsForApproval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users Create App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/appConsentRequestsForApproval<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users Create App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users Delete App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users Delete App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users Get App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users Get App Consent Requests For Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users Get App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users Update App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users Update App Consent Requests For Approval"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval List User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval List User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval List User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval List User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval List User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval List User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval List User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval List User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval List User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval Create User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval Create User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval Delete User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval Delete User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval Get User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval Get User Consent Requests"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval Get User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval Update User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval Update User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Delete Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Delete Approval"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Get Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Get Approval"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Get Approval"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Update Approval"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Update Approval"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval List Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval List Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval Create Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval Create Steps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval Delete Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval Delete Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval Get Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval Get Steps"
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
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval Get Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval Update Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users App Consent Request"
					],
					"operation": [
						"Users App Consent Requests For Approval User Consent Requests Approval Update Steps"
					]
				}
			}
		},
];
