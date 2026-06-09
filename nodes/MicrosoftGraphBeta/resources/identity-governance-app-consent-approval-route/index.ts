import type { INodeProperties } from 'n8n-workflow';

export const identityGovernanceAppConsentApprovalRouteDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					]
				}
			},
			"options": [
				{
					"name": "Identity Governance Delete App Consent",
					"value": "Identity Governance Delete App Consent",
					"action": "Delete navigation property appConsent for identityGovernance",
					"description": "Delete navigation property appConsent for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/appConsent"
						}
					}
				},
				{
					"name": "Identity Governance Get App Consent",
					"value": "Identity Governance Get App Consent",
					"action": "Get appConsent from identityGovernance",
					"description": "Get appConsent from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/appConsent"
						}
					}
				},
				{
					"name": "Identity Governance Update App Consent",
					"value": "Identity Governance Update App Consent",
					"action": "Update the navigation property appConsent in identityGovernance",
					"description": "Update the navigation property appConsent in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/appConsent"
						}
					}
				},
				{
					"name": "Identity Governance App Consent List App Consent Requests",
					"value": "Identity Governance App Consent List App Consent Requests",
					"action": "List appConsentRequests",
					"description": "Retrieve appConsentRequest objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/appConsent/appConsentRequests"
						}
					}
				},
				{
					"name": "Identity Governance App Consent Create App Consent Requests",
					"value": "Identity Governance App Consent Create App Consent Requests",
					"action": "Create new navigation property to appConsentRequests for identityGovernance",
					"description": "Create new navigation property to appConsentRequests for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/appConsent/appConsentRequests"
						}
					}
				},
				{
					"name": "Identity Governance App Consent Delete App Consent Requests",
					"value": "Identity Governance App Consent Delete App Consent Requests",
					"action": "Delete navigation property appConsentRequests for identityGovernance",
					"description": "Delete navigation property appConsentRequests for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance App Consent Get App Consent Requests",
					"value": "Identity Governance App Consent Get App Consent Requests",
					"action": "Get appConsentRequests from identityGovernance",
					"description": "A collection of userConsentRequest objects for a specific application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance App Consent Update App Consent Requests",
					"value": "Identity Governance App Consent Update App Consent Requests",
					"action": "Update the navigation property appConsentRequests in identityGovernance",
					"description": "Update the navigation property appConsentRequests in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests List User Consent Requests",
					"value": "Identity Governance App Consent App Consent Requests List User Consent Requests",
					"action": "List userConsentRequests",
					"description": "Retrieve a collection of userConsentRequest objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests Create User Consent Requests",
					"value": "Identity Governance App Consent App Consent Requests Create User Consent Requests",
					"action": "Create new navigation property to userConsentRequests for identityGovernance",
					"description": "Create new navigation property to userConsentRequests for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests Delete User Consent Requests",
					"value": "Identity Governance App Consent App Consent Requests Delete User Consent Requests",
					"action": "Delete navigation property userConsentRequests for identityGovernance",
					"description": "Delete navigation property userConsentRequests for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests Get User Consent Requests",
					"value": "Identity Governance App Consent App Consent Requests Get User Consent Requests",
					"action": "Get userConsentRequests from identityGovernance",
					"description": "A list of pending user consent requests. Supports $filter (eq).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests Update User Consent Requests",
					"value": "Identity Governance App Consent App Consent Requests Update User Consent Requests",
					"action": "Update the navigation property userConsentRequests in identityGovernance",
					"description": "Update the navigation property userConsentRequests in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests User Consent Requests Delete Approval",
					"value": "Identity Governance App Consent App Consent Requests User Consent Requests Delete Approval",
					"action": "Delete navigation property approval for identityGovernance",
					"description": "Delete navigation property approval for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests User Consent Requests Get Approval",
					"value": "Identity Governance App Consent App Consent Requests User Consent Requests Get Approval",
					"action": "Get approval from identityGovernance",
					"description": "Approval decisions associated with a request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests User Consent Requests Update Approval",
					"value": "Identity Governance App Consent App Consent Requests User Consent Requests Update Approval",
					"action": "Update the navigation property approval in identityGovernance",
					"description": "Update the navigation property approval in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps",
					"value": "Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps",
					"action": "List approvalSteps",
					"description": "In Azure AD entitlement management, lists the approvalStep objects associated with an approval object.  This call can be made by an approver, providing the identifier of the access package assignment request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests User Consent Requests Approval Create Steps",
					"value": "Identity Governance App Consent App Consent Requests User Consent Requests Approval Create Steps",
					"action": "Create new navigation property to steps for identityGovernance",
					"description": "Create new navigation property to steps for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests User Consent Requests Approval Delete Steps",
					"value": "Identity Governance App Consent App Consent Requests User Consent Requests Approval Delete Steps",
					"action": "Delete navigation property steps for identityGovernance",
					"description": "Delete navigation property steps for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests User Consent Requests Approval Get Steps",
					"value": "Identity Governance App Consent App Consent Requests User Consent Requests Approval Get Steps",
					"action": "Get steps from identityGovernance",
					"description": "Get steps from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance App Consent App Consent Requests User Consent Requests Approval Update Steps",
					"value": "Identity Governance App Consent App Consent Requests User Consent Requests Approval Update Steps",
					"action": "Update the navigation property steps in identityGovernance",
					"description": "Update the navigation property steps in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/appConsent/appConsentRequests/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/{{$parameter[\"userConsentRequest-id\"]}}/approval/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /identityGovernance/appConsent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance Delete App Consent"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance Delete App Consent"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/appConsent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance Get App Consent"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance Get App Consent"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance Get App Consent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/appConsent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance Update App Consent"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/appConsent<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance Update App Consent"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/appConsent/appConsentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent List App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent List App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent List App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent List App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent List App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent List App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent List App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent List App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent List App Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/appConsent/appConsentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent Create App Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/appConsent/appConsentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent Create App Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent Delete App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent Delete App Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent Get App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent Get App Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent Get App Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent Update App Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent Update App Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests List User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests List User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests List User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests List User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests List User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests List User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests List User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests List User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests List User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Create User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Create User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Delete User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Delete User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Get User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Get User Consent Requests"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Get User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Update User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests Update User Consent Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Delete Approval"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Delete Approval"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Get Approval"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Get Approval"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Get Approval"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Update Approval"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Update Approval"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval List Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval Create Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval Create Steps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval Delete Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval Delete Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval Get Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval Get Steps"
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
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval Get Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval Update Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/appConsent/appConsentRequests/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance App Consent Approval Route"
					],
					"operation": [
						"Identity Governance App Consent App Consent Requests User Consent Requests Approval Update Steps"
					]
				}
			}
		},
];
