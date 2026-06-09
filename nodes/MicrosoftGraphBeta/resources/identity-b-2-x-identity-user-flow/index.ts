import type { INodeProperties } from 'n8n-workflow';

export const identityB2XIdentityUserFlowDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					]
				}
			},
			"options": [
				{
					"name": "Identity List B 2 X User Flows",
					"value": "Identity List B 2 X User Flows",
					"action": "List b2xIdentityUserFlows",
					"description": "Retrieve a list of b2xIdentityUserFlow objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows"
						}
					}
				},
				{
					"name": "Identity Create B 2 X User Flows",
					"value": "Identity Create B 2 X User Flows",
					"action": "Create b2xIdentityUserFlow",
					"description": "Create a new b2xIdentityUserFlow object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/b2xUserFlows"
						}
					}
				},
				{
					"name": "Identity Delete B 2 X User Flows",
					"value": "Identity Delete B 2 X User Flows",
					"action": "Delete navigation property b2xUserFlows for identity",
					"description": "Delete navigation property b2xUserFlows for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Get B 2 X User Flows",
					"value": "Identity Get B 2 X User Flows",
					"action": "Get b2xUserFlows from identity",
					"description": "Represents entry point for B2X and self-service sign-up identity userflows.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Update B 2 X User Flows",
					"value": "Identity Update B 2 X User Flows",
					"action": "Update the navigation property b2xUserFlows in identity",
					"description": "Update the navigation property b2xUserFlows in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows List Languages",
					"value": "Identity B 2 X User Flows List Languages",
					"action": "List languages",
					"description": "Retrieve a list of languages supported for customization in a B2X user flow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Create Languages",
					"value": "Identity B 2 X User Flows Create Languages",
					"action": "Create new navigation property to languages for identity",
					"description": "Create new navigation property to languages for identity",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Delete Languages",
					"value": "Identity B 2 X User Flows Delete Languages",
					"action": "Delete navigation property languages for identity",
					"description": "Delete navigation property languages for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Get Languages",
					"value": "Identity B 2 X User Flows Get Languages",
					"action": "Get languages from identity",
					"description": "The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign up user flow. You cannot create custom languages in self-service sign up user flows.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Update Languages",
					"value": "Identity B 2 X User Flows Update Languages",
					"action": "Update the navigation property languages in identity",
					"description": "Update the navigation property languages in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages List Default Pages",
					"value": "Identity B 2 X User Flows Languages List Default Pages",
					"action": "List defaultPages",
					"description": "Get the userFlowLanguagePage resources from the defaultPages navigation property. These contain the values shown to the user in a default user journey of a user flow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/defaultPages"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Create Default Pages",
					"value": "Identity B 2 X User Flows Languages Create Default Pages",
					"action": "Create new navigation property to defaultPages for identity",
					"description": "Create new navigation property to defaultPages for identity",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/defaultPages"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Delete Default Pages",
					"value": "Identity B 2 X User Flows Languages Delete Default Pages",
					"action": "Delete navigation property defaultPages for identity",
					"description": "Delete navigation property defaultPages for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/defaultPages/{{$parameter[\"userFlowLanguagePage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Get Default Pages",
					"value": "Identity B 2 X User Flows Languages Get Default Pages",
					"action": "Get defaultPages from identity",
					"description": "Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/defaultPages/{{$parameter[\"userFlowLanguagePage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Update Default Pages",
					"value": "Identity B 2 X User Flows Languages Update Default Pages",
					"action": "Update the navigation property defaultPages in identity",
					"description": "Update the navigation property defaultPages in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/defaultPages/{{$parameter[\"userFlowLanguagePage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Get Default Pages Content",
					"value": "Identity B 2 X User Flows Languages Get Default Pages Content",
					"action": "Get media content for the navigation property defaultPages from identity",
					"description": "Get media content for the navigation property defaultPages from identity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/defaultPages/{{$parameter[\"userFlowLanguagePage-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Update Default Pages Content",
					"value": "Identity B 2 X User Flows Languages Update Default Pages Content",
					"action": "Update media content for the navigation property defaultPages in identity",
					"description": "Update media content for the navigation property defaultPages in identity",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/defaultPages/{{$parameter[\"userFlowLanguagePage-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages List Overrides Pages",
					"value": "Identity B 2 X User Flows Languages List Overrides Pages",
					"action": "List overridesPages",
					"description": "Get the userFlowLanguagePage resources from the overridesPages navigation property. These pages are used to customize the values shown to the user during a user journey in a user flow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/overridesPages"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Create Overrides Pages",
					"value": "Identity B 2 X User Flows Languages Create Overrides Pages",
					"action": "Create new navigation property to overridesPages for identity",
					"description": "Create new navigation property to overridesPages for identity",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/overridesPages"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Delete Overrides Pages",
					"value": "Identity B 2 X User Flows Languages Delete Overrides Pages",
					"action": "Delete navigation property overridesPages for identity",
					"description": "Delete navigation property overridesPages for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/overridesPages/{{$parameter[\"userFlowLanguagePage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Get Overrides Pages",
					"value": "Identity B 2 X User Flows Languages Get Overrides Pages",
					"action": "Get overridesPages from identity",
					"description": "Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/overridesPages/{{$parameter[\"userFlowLanguagePage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Update Overrides Pages",
					"value": "Identity B 2 X User Flows Languages Update Overrides Pages",
					"action": "Update the navigation property overridesPages in identity",
					"description": "Update the navigation property overridesPages in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/overridesPages/{{$parameter[\"userFlowLanguagePage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Get Overrides Pages Content",
					"value": "Identity B 2 X User Flows Languages Get Overrides Pages Content",
					"action": "Get media content for the navigation property overridesPages from identity",
					"description": "Get media content for the navigation property overridesPages from identity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/overridesPages/{{$parameter[\"userFlowLanguagePage-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Languages Update Overrides Pages Content",
					"value": "Identity B 2 X User Flows Languages Update Overrides Pages Content",
					"action": "Update media content for the navigation property overridesPages in identity",
					"description": "Update media content for the navigation property overridesPages in identity",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/languages/{{$parameter[\"userFlowLanguageConfiguration-id\"]}}/overridesPages/{{$parameter[\"userFlowLanguagePage-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows List User Attribute Assignments",
					"value": "Identity B 2 X User Flows List User Attribute Assignments",
					"action": "List userAttributeAssignments",
					"description": "Get the identityUserFlowAttributeAssignment resources from the userAttributeAssignments navigation property in a b2xIdentityUserFlow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userAttributeAssignments"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Create User Attribute Assignments",
					"value": "Identity B 2 X User Flows Create User Attribute Assignments",
					"action": "Create userAttributeAssignments",
					"description": "Create a new identityUserFlowAttributeAssignment object in a b2xIdentityUserFlow.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userAttributeAssignments"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Delete User Attribute Assignments",
					"value": "Identity B 2 X User Flows Delete User Attribute Assignments",
					"action": "Delete navigation property userAttributeAssignments for identity",
					"description": "Delete navigation property userAttributeAssignments for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userAttributeAssignments/{{$parameter[\"identityUserFlowAttributeAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Get User Attribute Assignments",
					"value": "Identity B 2 X User Flows Get User Attribute Assignments",
					"action": "Get userAttributeAssignments from identity",
					"description": "The user attribute assignments included in the user flow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userAttributeAssignments/{{$parameter[\"identityUserFlowAttributeAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Update User Attribute Assignments",
					"value": "Identity B 2 X User Flows Update User Attribute Assignments",
					"action": "Update the navigation property userAttributeAssignments in identity",
					"description": "Update the navigation property userAttributeAssignments in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userAttributeAssignments/{{$parameter[\"identityUserFlowAttributeAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows User Attribute Assignments Get User Attribute",
					"value": "Identity B 2 X User Flows User Attribute Assignments Get User Attribute",
					"action": "Get userAttribute from identity",
					"description": "The user attribute that you want to add to your user flow.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userAttributeAssignments/{{$parameter[\"identityUserFlowAttributeAssignment-id\"]}}/userAttribute"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows List User Flow Identity Providers",
					"value": "Identity B 2 X User Flows List User Flow Identity Providers",
					"action": "Get userFlowIdentityProviders from identity",
					"description": "Get userFlowIdentityProviders from identity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userFlowIdentityProviders"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows List Ref User Flow Identity Providers",
					"value": "Identity B 2 X User Flows List Ref User Flow Identity Providers",
					"action": "Get ref of userFlowIdentityProviders from identity",
					"description": "Get ref of userFlowIdentityProviders from identity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userFlowIdentityProviders/$ref"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Create Ref User Flow Identity Providers",
					"value": "Identity B 2 X User Flows Create Ref User Flow Identity Providers",
					"action": "Create new navigation property ref to userFlowIdentityProviders for identity",
					"description": "Create new navigation property ref to userFlowIdentityProviders for identity",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userFlowIdentityProviders/$ref"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows Delete Ref User Flow Identity Providers",
					"value": "Identity B 2 X User Flows Delete Ref User Flow Identity Providers",
					"action": "Delete ref of navigation property userFlowIdentityProviders for identity",
					"description": "Delete ref of navigation property userFlowIdentityProviders for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userFlowIdentityProviders/{{$parameter[\"identityProviderBase-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identity/b2xUserFlows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity List B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity List B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity List B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity List B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity List B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity List B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity List B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity List B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity List B 2 X User Flows"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity Create B 2 X User Flows"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity Create B 2 X User Flows"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity Delete B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity Delete B 2 X User Flows"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity Get B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity Get B 2 X User Flows"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity Get B 2 X User Flows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity Update B 2 X User Flows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity Update B 2 X User Flows"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Languages"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Create Languages"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Create Languages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Delete Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Delete Languages"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Get Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Get Languages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Get Languages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Update Languages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Update Languages"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Default Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Create Default Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Create Default Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Delete Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Delete Default Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Get Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Get Default Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Get Default Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Update Default Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Update Default Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Get Default Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Update Default Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/defaultPages/{userFlowLanguagePage-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Update Default Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages List Overrides Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Create Overrides Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Create Overrides Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Delete Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Delete Overrides Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Get Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Get Overrides Pages"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Get Overrides Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Update Overrides Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Update Overrides Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Get Overrides Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Update Overrides Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/languages/{userFlowLanguageConfiguration-id}/overridesPages/{userFlowLanguagePage-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Languages Update Overrides Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Attribute Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Create User Attribute Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Create User Attribute Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Delete User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Delete User Attribute Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Get User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Get User Attribute Assignments"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Get User Attribute Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Update User Attribute Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Update User Attribute Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows User Attribute Assignments Get User Attribute"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows User Attribute Assignments Get User Attribute"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows User Attribute Assignments Get User Attribute"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List User Flow Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Ref User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Ref User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Ref User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Ref User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Ref User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Ref User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows List Ref User Flow Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Create Ref User Flow Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "Odata ID",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Create Ref User Flow Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userFlowIdentityProviders/{identityProviderBase-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Delete Ref User Flow Identity Providers"
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
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Delete Ref User Flow Identity Providers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity B 2 X Identity User Flow"
					],
					"operation": [
						"Identity B 2 X User Flows Delete Ref User Flow Identity Providers"
					]
				}
			}
		},
];
