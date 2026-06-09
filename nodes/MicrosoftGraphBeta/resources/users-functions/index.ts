import type { INodeProperties } from 'n8n-workflow';

export const usersFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					]
				}
			},
			"options": [
				{
					"name": "Users Delta",
					"value": "Users Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users Get Managed App Blocked Users",
					"value": "Users Get Managed App Blocked Users",
					"action": "Invoke function getManagedAppBlockedUsers",
					"description": "Invoke function getManagedAppBlockedUsers",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/microsoft.graph.getManagedAppBlockedUsers()"
						}
					}
				},
				{
					"name": "Users User Activities Recent",
					"value": "Users User Activities Recent",
					"action": "Invoke function recent",
					"description": "Invoke function recent",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities/microsoft.graph.recent()"
						}
					}
				},
				{
					"name": "Users User App Consent Requests For Approval Filter By Current User",
					"value": "Users User App Consent Requests For Approval Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User",
					"value": "Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Users User Approvals Filter By Current User",
					"value": "Users User Approvals Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Users User Calendar Calendar View Delta",
					"value": "Users User Calendar Calendar View Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/calendarView/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Calendar View Event Exception Occurrences Delta",
					"value": "Users User Calendar Calendar View Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"value": "Users User Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Calendar View Event Instances Delta",
					"value": "Users User Calendar Calendar View Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"value": "Users User Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Events Delta",
					"value": "Users User Calendar Events Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/events/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Events Event Exception Occurrences Delta",
					"value": "Users User Calendar Events Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Events Event Exception Occurrences Event Instances Delta",
					"value": "Users User Calendar Events Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Events Event Instances Delta",
					"value": "Users User Calendar Events Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Events Event Instances Event Exception Occurrences Delta",
					"value": "Users User Calendar Events Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Allowed Calendar Sharing Roles",
					"value": "Users User Calendar Allowed Calendar Sharing Roles",
					"action": "Invoke function allowedCalendarSharingRoles",
					"description": "Invoke function allowedCalendarSharingRoles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendar/microsoft.graph.allowedCalendarSharingRoles(User='{{$parameter[\"User\"]}}')"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Delta",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Events Delta",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Events Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles",
					"value": "Users User Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles",
					"action": "Invoke function allowedCalendarSharingRoles",
					"description": "Invoke function allowedCalendarSharingRoles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/microsoft.graph.allowedCalendarSharingRoles(User='{{$parameter[\"User\"]}}')"
						}
					}
				},
				{
					"name": "Users User Calendar View Delta",
					"value": "Users User Calendar View Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar View Event Exception Occurrences Delta",
					"value": "Users User Calendar View Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar View Event Exception Occurrences Event Instances Delta",
					"value": "Users User Calendar View Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar View Event Instances Delta",
					"value": "Users User Calendar View Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendar View Event Instances Event Exception Occurrences Delta",
					"value": "Users User Calendar View Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Calendar View Delta",
					"value": "Users User Calendars Calendar Calendar View Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Calendar View Event Exception Occurrences Delta",
					"value": "Users User Calendars Calendar Calendar View Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"value": "Users User Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Calendar View Event Instances Delta",
					"value": "Users User Calendars Calendar Calendar View Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"value": "Users User Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Events Delta",
					"value": "Users User Calendars Calendar Events Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Events Event Exception Occurrences Delta",
					"value": "Users User Calendars Calendar Events Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Events Event Exception Occurrences Event Instances Delta",
					"value": "Users User Calendars Calendar Events Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Events Event Instances Delta",
					"value": "Users User Calendars Calendar Events Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Events Event Instances Event Exception Occurrences Delta",
					"value": "Users User Calendars Calendar Events Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Calendars Calendar Allowed Calendar Sharing Roles",
					"value": "Users User Calendars Calendar Allowed Calendar Sharing Roles",
					"action": "Invoke function allowedCalendarSharingRoles",
					"description": "Invoke function allowedCalendarSharingRoles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/microsoft.graph.allowedCalendarSharingRoles(User='{{$parameter[\"User\"]}}')"
						}
					}
				},
				{
					"name": "Users User Chats All Messages",
					"value": "Users User Chats All Messages",
					"action": "Invoke function allMessages",
					"description": "Invoke function allMessages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/microsoft.graph.allMessages()"
						}
					}
				},
				{
					"name": "Users User Chats Get All Messages",
					"value": "Users User Chats Get All Messages",
					"action": "Invoke function getAllMessages",
					"description": "Invoke function getAllMessages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/microsoft.graph.getAllMessages()"
						}
					}
				},
				{
					"name": "Users User Chats Chat Messages Delta",
					"value": "Users User Chats Chat Messages Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Chats Chat Messages Chat Message Replies Delta",
					"value": "Users User Chats Chat Messages Chat Message Replies Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Cloud P Cs Cloud PC Get Cloud Pc Connectivity History",
					"value": "Users User Cloud P Cs Cloud PC Get Cloud Pc Connectivity History",
					"action": "Invoke function getCloudPcConnectivityHistory",
					"description": "Invoke function getCloudPcConnectivityHistory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getCloudPcConnectivityHistory()"
						}
					}
				},
				{
					"name": "Users User Cloud P Cs Cloud PC Get Cloud Pc Launch Info",
					"value": "Users User Cloud P Cs Cloud PC Get Cloud Pc Launch Info",
					"action": "Invoke function getCloudPcLaunchInfo",
					"description": "Invoke function getCloudPcLaunchInfo",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getCloudPcLaunchInfo()"
						}
					}
				},
				{
					"name": "Users User Cloud P Cs Cloud PC Get Shift Work Cloud Pc Access State",
					"value": "Users User Cloud P Cs Cloud PC Get Shift Work Cloud Pc Access State",
					"action": "Invoke function getShiftWorkCloudPcAccessState",
					"description": "Invoke function getShiftWorkCloudPcAccessState",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getShiftWorkCloudPcAccessState()"
						}
					}
				},
				{
					"name": "Users User Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions",
					"value": "Users User Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions",
					"action": "Invoke function getSupportedCloudPcRemoteActions",
					"description": "Invoke function getSupportedCloudPcRemoteActions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getSupportedCloudPcRemoteActions()"
						}
					}
				},
				{
					"name": "Users User Contact Folders Delta",
					"value": "Users User Contact Folders Delta",
					"action": "Invoke function delta",
					"description": "Get a set of contact folders that have been added, deleted, or removed from the user's mailbox. A **delta** function call for contact folders in a mailbox is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the contact folders. This allows you to maintain and synchronize \na local store of a user's contact folders without having to fetch all the contact folders of that mailbox from the server every time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Contact Folders Contact Folder Child Folders Delta",
					"value": "Users User Contact Folders Contact Folder Child Folders Delta",
					"action": "Invoke function delta",
					"description": "Get a set of contact folders that have been added, deleted, or removed from the user's mailbox. A **delta** function call for contact folders in a mailbox is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the contact folders. This allows you to maintain and synchronize \na local store of a user's contact folders without having to fetch all the contact folders of that mailbox from the server every time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta",
					"value": "Users User Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta",
					"action": "Invoke function delta",
					"description": "Get a set of contacts that have been added, deleted, or updated in a specified folder. A **delta** function call for contacts in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the contacts in \nthat folder. This allows you to maintain and synchronize a local store of a user's contacts without \nhaving to fetch the entire set of contacts from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Contact Folders Contact Folder Contacts Delta",
					"value": "Users User Contact Folders Contact Folder Contacts Delta",
					"action": "Invoke function delta",
					"description": "Get a set of contacts that have been added, deleted, or updated in a specified folder. A **delta** function call for contacts in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the contacts in \nthat folder. This allows you to maintain and synchronize a local store of a user's contacts without \nhaving to fetch the entire set of contacts from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Contacts Delta",
					"value": "Users User Contacts Delta",
					"action": "Invoke function delta",
					"description": "Get a set of contacts that have been added, deleted, or updated in a specified folder. A **delta** function call for contacts in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the contacts in \nthat folder. This allows you to maintain and synchronize a local store of a user's contacts without \nhaving to fetch the entire set of contacts from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contacts/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Devices Delta",
					"value": "Users User Devices Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Events Delta",
					"value": "Users User Events Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Events Event Exception Occurrences Delta",
					"value": "Users User Events Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Events Event Exception Occurrences Event Instances Delta",
					"value": "Users User Events Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Events Event Instances Delta",
					"value": "Users User Events Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Events Event Instances Event Exception Occurrences Delta",
					"value": "Users User Events Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Joined Groups Delta",
					"value": "Users User Joined Groups Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/joinedGroups/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Mail Folders Delta",
					"value": "Users User Mail Folders Delta",
					"action": "Invoke function delta",
					"description": "Get a set of mail folders that have been added, deleted, or removed from the user's mailbox. A **delta** function call for mail folders in a mailbox is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the mail folders. This allows you to maintain and synchronize \na local store of a user's mail folders without having to fetch all the mail folders of that mailbox from the server every time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Mail Folders Mail Folder Child Folders Delta",
					"value": "Users User Mail Folders Mail Folder Child Folders Delta",
					"action": "Invoke function delta",
					"description": "Get a set of mail folders that have been added, deleted, or removed from the user's mailbox. A **delta** function call for mail folders in a mailbox is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the mail folders. This allows you to maintain and synchronize \na local store of a user's mail folders without having to fetch all the mail folders of that mailbox from the server every time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Mail Folders Mail Folder Child Folders Mail Folder Messages Delta",
					"value": "Users User Mail Folders Mail Folder Child Folders Mail Folder Messages Delta",
					"action": "Invoke function delta",
					"description": "Get a set of messages that have been added, deleted, or updated in a specified folder. A **delta** function call for messages in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, you can [query for incremental changes in the messages in \nthat folder](/graph/delta-query-messages). This allows you to maintain and synchronize a local store of a user's messages without \nhaving to fetch the entire set of messages from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Mail Folders Mail Folder Messages Delta",
					"value": "Users User Mail Folders Mail Folder Messages Delta",
					"action": "Invoke function delta",
					"description": "Get a set of messages that have been added, deleted, or updated in a specified folder. A **delta** function call for messages in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, you can [query for incremental changes in the messages in \nthat folder](/graph/delta-query-messages). This allows you to maintain and synchronize a local store of a user's messages without \nhaving to fetch the entire set of messages from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Managed Devices App Diagnostics",
					"value": "Users User Managed Devices App Diagnostics",
					"action": "Invoke function appDiagnostics",
					"description": "Invoke function appDiagnostics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/microsoft.graph.appDiagnostics(upn='{{$parameter[\"upn\"]}}')"
						}
					}
				},
				{
					"name": "Users User Managed Devices Managed Device Get Cloud Pc Remote Action Results",
					"value": "Users User Managed Devices Managed Device Get Cloud Pc Remote Action Results",
					"action": "Invoke function getCloudPcRemoteActionResults",
					"description": "Invoke function getCloudPcRemoteActionResults",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getCloudPcRemoteActionResults()"
						}
					}
				},
				{
					"name": "Users User Managed Devices Managed Device Get Cloud Pc Review Status",
					"value": "Users User Managed Devices Managed Device Get Cloud Pc Review Status",
					"action": "Invoke function getCloudPcReviewStatus",
					"description": "Invoke function getCloudPcReviewStatus",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getCloudPcReviewStatus()"
						}
					}
				},
				{
					"name": "Users User Managed Devices Managed Device Get File Vault Key",
					"value": "Users User Managed Devices Managed Device Get File Vault Key",
					"action": "Invoke function getFileVaultKey",
					"description": "Invoke function getFileVaultKey",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getFileVaultKey()"
						}
					}
				},
				{
					"name": "Users User Managed Devices Managed Device Get Non Compliant Settings",
					"value": "Users User Managed Devices Managed Device Get Non Compliant Settings",
					"action": "Invoke function getNonCompliantSettings",
					"description": "Invoke function getNonCompliantSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getNonCompliantSettings()"
						}
					}
				},
				{
					"name": "Users User Managed Devices Managed Device Get Oem Warranty",
					"value": "Users User Managed Devices Managed Device Get Oem Warranty",
					"action": "Invoke function getOemWarranty",
					"description": "Invoke function getOemWarranty",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getOemWarranty()"
						}
					}
				},
				{
					"name": "Users User Managed Devices Managed Device Retrieve Remote Help Session",
					"value": "Users User Managed Devices Managed Device Retrieve Remote Help Session",
					"action": "Invoke function retrieveRemoteHelpSession",
					"description": "Invoke function retrieveRemoteHelpSession",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.retrieveRemoteHelpSession(sessionKey='{{$parameter[\"sessionKey\"]}}')"
						}
					}
				},
				{
					"name": "Users User Messages Delta",
					"value": "Users User Messages Delta",
					"action": "Invoke function delta",
					"description": "Get a set of messages that have been added, deleted, or updated in a specified folder. A **delta** function call for messages in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, you can [query for incremental changes in the messages in \nthat folder](/graph/delta-query-messages). This allows you to maintain and synchronize a local store of a user's messages without \nhaving to fetch the entire set of messages from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Export Device And App Management Data D 390",
					"value": "Users User Export Device And App Management Data D 390",
					"action": "Invoke function exportDeviceAndAppManagementData",
					"description": "Invoke function exportDeviceAndAppManagementData",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.exportDeviceAndAppManagementData()"
						}
					}
				},
				{
					"name": "Users User Export Device And App Management Data 623 C",
					"value": "Users User Export Device And App Management Data 623 C",
					"action": "Invoke function exportDeviceAndAppManagementData",
					"description": "Invoke function exportDeviceAndAppManagementData",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.exportDeviceAndAppManagementData(skip={{$parameter[\"skip\"]}},top={{$parameter[\"top\"]}})"
						}
					}
				},
				{
					"name": "Users User Find Room Lists",
					"value": "Users User Find Room Lists",
					"action": "Invoke function findRoomLists",
					"description": "Get the room lists defined in a tenant, as represented by their emailAddress objects. Tenants can organize meeting rooms into room lists. In this API, each meeting room and room list is represented by an emailAddress instance.\nYou can get all the room lists in the tenant, get all the rooms in the tenant, or get all the rooms in a specific room list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.findRoomLists()"
						}
					}
				},
				{
					"name": "Users User Find Rooms D 266",
					"value": "Users User Find Rooms D 266",
					"action": "Invoke function findRooms",
					"description": "Invoke function findRooms",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.findRooms()"
						}
					}
				},
				{
					"name": "Users User Find Rooms 31 Ef",
					"value": "Users User Find Rooms 31 Ef",
					"action": "Invoke function findRooms",
					"description": "Invoke function findRooms",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.findRooms(RoomList='{{$parameter[\"RoomList\"]}}')"
						}
					}
				},
				{
					"name": "Users User Get Effective Device Enrollment Configurations",
					"value": "Users User Get Effective Device Enrollment Configurations",
					"action": "Invoke function getEffectiveDeviceEnrollmentConfigurations",
					"description": "Invoke function getEffectiveDeviceEnrollmentConfigurations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.getEffectiveDeviceEnrollmentConfigurations()"
						}
					}
				},
				{
					"name": "Users User Get Logged On Managed Devices",
					"value": "Users User Get Logged On Managed Devices",
					"action": "Invoke function getLoggedOnManagedDevices",
					"description": "Invoke function getLoggedOnManagedDevices",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.getLoggedOnManagedDevices()"
						}
					}
				},
				{
					"name": "Users User Get Managed App Diagnostic Statuses",
					"value": "Users User Get Managed App Diagnostic Statuses",
					"action": "Invoke function getManagedAppDiagnosticStatuses",
					"description": "Gets diagnostics validation status for a given user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.getManagedAppDiagnosticStatuses()"
						}
					}
				},
				{
					"name": "Users User Get Managed App Policies",
					"value": "Users User Get Managed App Policies",
					"action": "Invoke function getManagedAppPolicies",
					"description": "Gets app restrictions for a given user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.getManagedAppPolicies()"
						}
					}
				},
				{
					"name": "Users User Get Managed Devices With App Failures",
					"value": "Users User Get Managed Devices With App Failures",
					"action": "Invoke function getManagedDevicesWithAppFailures",
					"description": "Retrieves the list of devices with failed apps",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.getManagedDevicesWithAppFailures()"
						}
					}
				},
				{
					"name": "Users User Get Managed Devices With Failed Or Pending Apps",
					"value": "Users User Get Managed Devices With Failed Or Pending Apps",
					"action": "Invoke function getManagedDevicesWithFailedOrPendingApps",
					"description": "Retrieves the list of devices with failed or pending apps",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.getManagedDevicesWithFailedOrPendingApps()"
						}
					}
				},
				{
					"name": "Users User Is Managed App User Blocked",
					"value": "Users User Is Managed App User Blocked",
					"action": "Invoke function isManagedAppUserBlocked",
					"description": "Gets the blocked state of a managed app user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.isManagedAppUserBlocked()"
						}
					}
				},
				{
					"name": "Users User Reminder View",
					"value": "Users User Reminder View",
					"action": "Invoke function reminderView",
					"description": "Invoke function reminderView",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/microsoft.graph.reminderView(StartDateTime='{{$parameter[\"StartDateTime\"]}}',EndDateTime='{{$parameter[\"EndDateTime\"]}}')"
						}
					}
				},
				{
					"name": "Users User Onenote Notebooks Get Recent Notebooks",
					"value": "Users User Onenote Notebooks Get Recent Notebooks",
					"action": "Invoke function getRecentNotebooks",
					"description": "Invoke function getRecentNotebooks",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/microsoft.graph.getRecentNotebooks(includePersonalNotebooks={{$parameter[\"includePersonalNotebooks\"]}})"
						}
					}
				},
				{
					"name": "Users User Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"value": "Users User Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Users User Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Preview",
					"value": "Users User Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Users User Onenote Pages Onenote Page Preview",
					"value": "Users User Onenote Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Users User Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"value": "Users User Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Users User Onenote Sections Onenote Section Pages Onenote Page Preview",
					"value": "Users User Onenote Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Users User Outlook Supported Languages",
					"value": "Users User Outlook Supported Languages",
					"action": "Invoke function supportedLanguages",
					"description": "Get the list of locales and languages that are supported for the user, as configured on the user's mailbox server. When setting up an Outlook client, the user selects the preferred language from this supported list. You can subsequently get the preferred language by \ngetting the user's mailbox settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/outlook/microsoft.graph.supportedLanguages()"
						}
					}
				},
				{
					"name": "Users User Outlook Supported Time Zones Ee 48",
					"value": "Users User Outlook Supported Time Zones Ee 48",
					"action": "Invoke function supportedTimeZones",
					"description": "Invoke function supportedTimeZones",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/outlook/microsoft.graph.supportedTimeZones()"
						}
					}
				},
				{
					"name": "Users User Outlook Supported Time Zones 69 Ec",
					"value": "Users User Outlook Supported Time Zones 69 Ec",
					"action": "Invoke function supportedTimeZones",
					"description": "Invoke function supportedTimeZones",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/outlook/microsoft.graph.supportedTimeZones(TimeZoneStandard='{{$parameter[\"TimeZoneStandard\"]}}')"
						}
					}
				},
				{
					"name": "Users User Pending Access Review Instances Filter By Current User",
					"value": "Users User Pending Access Review Instances Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User",
					"value": "Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User",
					"value": "Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User",
					"value": "Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User",
					"value": "Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User",
					"value": "Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User",
					"value": "Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Users User Planner All Delta",
					"value": "Users User Planner All Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/planner/all/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Todo Lists Delta",
					"value": "Users User Todo Lists Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Users User Todo Lists Todo Task List Tasks Delta",
					"value": "Users User Todo Lists Todo Task List Tasks Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/microsoft.graph.delta()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/microsoft.graph.getManagedAppBlockedUsers()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users Get Managed App Blocked Users"
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
						"Users Functions"
					],
					"operation": [
						"Users Get Managed App Blocked Users"
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
						"Users Functions"
					],
					"operation": [
						"Users Get Managed App Blocked Users"
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
						"Users Functions"
					],
					"operation": [
						"Users Get Managed App Blocked Users"
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
						"Users Functions"
					],
					"operation": [
						"Users Get Managed App Blocked Users"
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
						"Users Functions"
					],
					"operation": [
						"Users Get Managed App Blocked Users"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/activities/microsoft.graph.recent()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Activities Recent"
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
						"Users Functions"
					],
					"operation": [
						"Users User Activities Recent"
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
						"Users Functions"
					],
					"operation": [
						"Users User Activities Recent"
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
						"Users Functions"
					],
					"operation": [
						"Users User Activities Recent"
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
						"Users Functions"
					],
					"operation": [
						"Users User Activities Recent"
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
						"Users Functions"
					],
					"operation": [
						"Users User Activities Recent"
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
						"Users Functions"
					],
					"operation": [
						"Users User Activities Recent"
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
						"Users Functions"
					],
					"operation": [
						"Users User Activities Recent"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/appConsentRequestsForApproval/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/approvals/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Approvals Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "target",
			"type": "options",
			"options": [
				{
					"name": "Target",
					"value": "target"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Approvals Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Approvals Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Approvals Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Approvals Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Approvals Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Approvals Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Approvals Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Approvals Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/calendarView/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/calendarView/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/calendarView/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Calendar View Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/events/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/events/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/events/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/events/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Events Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendar/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "User",
			"required": true,
			"description": "Usage: User='{User}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "User",
			"required": true,
			"description": "Usage: User='{User}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendar View Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/calendarView/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/calendarView/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/events/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/events/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/events/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendars/{calendar-id}/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "User",
			"required": true,
			"description": "Usage: User='{User}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Users Functions"
					],
					"operation": [
						"Users User Calendars Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/microsoft.graph.allMessages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Chats All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats All Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/microsoft.graph.getAllMessages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Chats Get All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Get All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Get All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Get All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Get All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Get All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Get All Messages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Get All Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Chat Message Replies Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Chat Message Replies Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Chat Message Replies Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Chat Message Replies Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Chat Message Replies Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Chat Message Replies Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Chat Message Replies Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Chats Chat Messages Chat Message Replies Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/cloudPCs/{cloudPC-id}/microsoft.graph.getCloudPcConnectivityHistory()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
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
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
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
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
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
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
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
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
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
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/cloudPCs/{cloudPC-id}/microsoft.graph.getCloudPcLaunchInfo()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Cloud Pc Launch Info"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/cloudPCs/{cloudPC-id}/microsoft.graph.getShiftWorkCloudPcAccessState()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Shift Work Cloud Pc Access State"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/cloudPCs/{cloudPC-id}/microsoft.graph.getSupportedCloudPcRemoteActions()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
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
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
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
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
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
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
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
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
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
						"Users Functions"
					],
					"operation": [
						"Users User Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contact Folders Contact Folder Contacts Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contacts/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contacts Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Contacts Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Devices Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Devices Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Devices Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Devices Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Devices Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Devices Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Devices Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Devices Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Event Exception Occurrences Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Events Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/joinedGroups/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Joined Groups Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Joined Groups Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Joined Groups Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Joined Groups Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Joined Groups Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Joined Groups Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Joined Groups Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Joined Groups Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Mail Folders Mail Folder Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/microsoft.graph.appDiagnostics(upn='{upn}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Upn",
			"name": "upn",
			"required": true,
			"description": "Usage: upn='{upn}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices App Diagnostics"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices App Diagnostics"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices App Diagnostics"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices App Diagnostics"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices App Diagnostics"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/microsoft.graph.getCloudPcRemoteActionResults()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Cloud Pc Remote Action Results"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Cloud Pc Remote Action Results"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Cloud Pc Remote Action Results"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Cloud Pc Remote Action Results"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Cloud Pc Remote Action Results"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/microsoft.graph.getCloudPcReviewStatus()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/microsoft.graph.getFileVaultKey()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get File Vault Key"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/microsoft.graph.getNonCompliantSettings()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Non Compliant Settings"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Non Compliant Settings"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Non Compliant Settings"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Non Compliant Settings"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Non Compliant Settings"
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
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/microsoft.graph.getOemWarranty()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Get Oem Warranty"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/microsoft.graph.retrieveRemoteHelpSession(sessionKey='{sessionKey}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Retrieve Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "Session Key",
			"name": "sessionKey",
			"required": true,
			"description": "Usage: sessionKey='{sessionKey}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Managed Devices Managed Device Retrieve Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Messages Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.exportDeviceAndAppManagementData()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Export Device And App Management Data D 390"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.exportDeviceAndAppManagementData(skip={skip},top={top})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Export Device And App Management Data 623 C"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"required": true,
			"description": "Usage: skip={skip}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Export Device And App Management Data 623 C"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"required": true,
			"description": "Usage: top={top}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Export Device And App Management Data 623 C"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.findRoomLists()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Find Room Lists"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Room Lists"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Room Lists"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Room Lists"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Room Lists"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Room Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.findRooms()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms D 266"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms D 266"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms D 266"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms D 266"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms D 266"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms D 266"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.findRooms(RoomList='{RoomList}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms 31 Ef"
					]
				}
			}
		},
		{
			"displayName": "Room List",
			"name": "RoomList",
			"required": true,
			"description": "Usage: RoomList='{RoomList}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms 31 Ef"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms 31 Ef"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms 31 Ef"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms 31 Ef"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms 31 Ef"
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
						"Users Functions"
					],
					"operation": [
						"Users User Find Rooms 31 Ef"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.getEffectiveDeviceEnrollmentConfigurations()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Get Effective Device Enrollment Configurations"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Effective Device Enrollment Configurations"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Effective Device Enrollment Configurations"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Effective Device Enrollment Configurations"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Effective Device Enrollment Configurations"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Effective Device Enrollment Configurations"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Effective Device Enrollment Configurations"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Effective Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.getLoggedOnManagedDevices()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Get Logged On Managed Devices"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Logged On Managed Devices"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Logged On Managed Devices"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Logged On Managed Devices"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Logged On Managed Devices"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Logged On Managed Devices"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Logged On Managed Devices"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Logged On Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.getManagedAppDiagnosticStatuses()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Diagnostic Statuses"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Diagnostic Statuses"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Diagnostic Statuses"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Diagnostic Statuses"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Diagnostic Statuses"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Diagnostic Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.getManagedAppPolicies()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Policies"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Policies"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Policies"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Policies"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Policies"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Policies"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Policies"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed App Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.getManagedDevicesWithAppFailures()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With App Failures"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With App Failures"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With App Failures"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With App Failures"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With App Failures"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With App Failures"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.getManagedDevicesWithFailedOrPendingApps()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With Failed Or Pending Apps"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With Failed Or Pending Apps"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With Failed Or Pending Apps"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With Failed Or Pending Apps"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With Failed Or Pending Apps"
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
						"Users Functions"
					],
					"operation": [
						"Users User Get Managed Devices With Failed Or Pending Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.isManagedAppUserBlocked()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Is Managed App User Blocked"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/microsoft.graph.reminderView(StartDateTime='{StartDateTime}',EndDateTime='{EndDateTime}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Reminder View"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "StartDateTime",
			"required": true,
			"description": "Usage: StartDateTime='{StartDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Reminder View"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "EndDateTime",
			"required": true,
			"description": "Usage: EndDateTime='{EndDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Reminder View"
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
						"Users Functions"
					],
					"operation": [
						"Users User Reminder View"
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
						"Users Functions"
					],
					"operation": [
						"Users User Reminder View"
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
						"Users Functions"
					],
					"operation": [
						"Users User Reminder View"
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
						"Users Functions"
					],
					"operation": [
						"Users User Reminder View"
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
						"Users Functions"
					],
					"operation": [
						"Users User Reminder View"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/microsoft.graph.getRecentNotebooks(includePersonalNotebooks={includePersonalNotebooks})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Notebooks Get Recent Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Include Personal Notebooks",
			"name": "includePersonalNotebooks",
			"required": true,
			"description": "Usage: includePersonalNotebooks={includePersonalNotebooks}",
			"default": false,
			"type": "boolean",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Notebooks Get Recent Notebooks"
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
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Notebooks Get Recent Notebooks"
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
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Notebooks Get Recent Notebooks"
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
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Notebooks Get Recent Notebooks"
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
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Notebooks Get Recent Notebooks"
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
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Notebooks Get Recent Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Onenote Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/outlook/microsoft.graph.supportedLanguages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Languages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Languages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Languages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Languages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Languages"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Languages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/outlook/microsoft.graph.supportedTimeZones()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones Ee 48"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones Ee 48"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones Ee 48"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones Ee 48"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones Ee 48"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones Ee 48"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/outlook/microsoft.graph.supportedTimeZones(TimeZoneStandard='{TimeZoneStandard}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones 69 Ec"
					]
				}
			}
		},
		{
			"displayName": "Time Zone Standard",
			"name": "TimeZoneStandard",
			"required": true,
			"description": "Usage: TimeZoneStandard='{TimeZoneStandard}'",
			"default": "windows",
			"type": "options",
			"options": [
				{
					"name": "Windows",
					"value": "windows"
				},
				{
					"name": "Iana",
					"value": "iana"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones 69 Ec"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones 69 Ec"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones 69 Ec"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones 69 Ec"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones 69 Ec"
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
						"Users Functions"
					],
					"operation": [
						"Users User Outlook Supported Time Zones 69 Ec"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Users Functions"
					],
					"operation": [
						"Users User Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/planner/all/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Planner All Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Planner All Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Planner All Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Planner All Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Planner All Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Planner All Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Planner All Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Planner All Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Todo Task List Tasks Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Todo Task List Tasks Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Todo Task List Tasks Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Todo Task List Tasks Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Todo Task List Tasks Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Todo Task List Tasks Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Todo Task List Tasks Delta"
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
						"Users Functions"
					],
					"operation": [
						"Users User Todo Lists Todo Task List Tasks Delta"
					]
				}
			}
		},
];
