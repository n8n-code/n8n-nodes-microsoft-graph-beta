import type { INodeProperties } from 'n8n-workflow';

export const domainsSharedEmailDomainInvitationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Shared Email Domain Invitation"
					]
				}
			},
			"options": [
				{
					"name": "Domains List Shared Email Domain Invitations",
					"value": "Domains List Shared Email Domain Invitations",
					"action": "Get sharedEmailDomainInvitations from domains",
					"description": "Get sharedEmailDomainInvitations from domains",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/sharedEmailDomainInvitations"
						}
					}
				},
				{
					"name": "Domains Create Shared Email Domain Invitations",
					"value": "Domains Create Shared Email Domain Invitations",
					"action": "Create new navigation property to sharedEmailDomainInvitations for domains",
					"description": "Create new navigation property to sharedEmailDomainInvitations for domains",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/sharedEmailDomainInvitations"
						}
					}
				},
				{
					"name": "Domains Delete Shared Email Domain Invitations",
					"value": "Domains Delete Shared Email Domain Invitations",
					"action": "Delete navigation property sharedEmailDomainInvitations for domains",
					"description": "Delete navigation property sharedEmailDomainInvitations for domains",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/sharedEmailDomainInvitations/{{$parameter[\"sharedEmailDomainInvitation-id\"]}}"
						}
					}
				},
				{
					"name": "Domains Get Shared Email Domain Invitations",
					"value": "Domains Get Shared Email Domain Invitations",
					"action": "Get sharedEmailDomainInvitations from domains",
					"description": "Get sharedEmailDomainInvitations from domains",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/sharedEmailDomainInvitations/{{$parameter[\"sharedEmailDomainInvitation-id\"]}}"
						}
					}
				},
				{
					"name": "Domains Update Shared Email Domain Invitations",
					"value": "Domains Update Shared Email Domain Invitations",
					"action": "Update the navigation property sharedEmailDomainInvitations in domains",
					"description": "Update the navigation property sharedEmailDomainInvitations in domains",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/domains/{{$parameter[\"domain-id\"]}}/sharedEmailDomainInvitations/{{$parameter[\"sharedEmailDomainInvitation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /domains/{domain-id}/sharedEmailDomainInvitations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains List Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains List Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains List Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains List Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains List Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains List Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains List Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains List Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains List Shared Email Domain Invitations"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domain-id}/sharedEmailDomainInvitations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains Create Shared Email Domain Invitations"
					]
				}
			}
		},
		{
			"displayName": "POST /domains/{domain-id}/sharedEmailDomainInvitations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains Create Shared Email Domain Invitations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains Delete Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains Delete Shared Email Domain Invitations"
					]
				}
			}
		},
		{
			"displayName": "GET /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains Get Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains Get Shared Email Domain Invitations"
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
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains Get Shared Email Domain Invitations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains Update Shared Email Domain Invitations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domains Shared Email Domain Invitation"
					],
					"operation": [
						"Domains Update Shared Email Domain Invitations"
					]
				}
			}
		},
];
